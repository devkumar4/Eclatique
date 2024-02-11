  import { Request, Response } from "express";
  import mongoose from "mongoose";
  import Order from "../models/order";
  import User from "../models/user";
  import ProductModel from "../models/product";
  import { ProductDocument } from "../models/product";
  const stripe = require('stripe')('sk_test_51MiYaMSGmOVP0oukixqisNSs1TbaGPdpYEQRjKOEnGUzg71JOn3sgbCqxgmqIklv0Vonz7FaKpgaALQYMzGZKjnj00bOu2z1U3');


  const OrderController = {
    createOrder: async (req: Request, res: Response) => {},

    orders: async (req, res) => {
      const userId = req.user.userId;
      const { shippingAddress } = req.body;
  
      try {
          const user = await User.findById(userId).populate({
              path: "cart.productId",
              model: "Product",
          });
  
          if (!user) {
              return res.status(404).json({ error: "User not found" });
          }
  
          const pricesAvailable = user.cart.every((item) => {
              return item.productId instanceof ProductModel;
          });
  
          if (!pricesAvailable) {
              return res.status(400).json({
                  error: "One or more products in the cart do not have a valid price.",
              });
          }
  
          const lineItems = await Promise.all(user.cart.map(async (item) => {
              const product = await ProductModel.findById(item.productId);
              return {
                  productId: item.productId,
                  productName: product.name,
                  productImage: product.images,
                  quantity: item.quantity,
                  totalPrice: item.quantity * product.price,
              };
          }));
  
          const totalPrice = lineItems.reduce((total, item) => total + item.totalPrice, 0);
  
          const totalPriceCents = Math.round(totalPrice * 100);
  
        
  
          const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items: lineItems.map((item) => ({
                  price_data: {
                      currency: 'usd',
                      product_data: {
                          name: item.productName,
                      },
                      unit_amount: Math.round(item.totalPrice * 100),
                  },
                  quantity: item.quantity,
              })),
              mode: 'payment',
              success_url: 'http://localhost:3000/explore/order/success',
              cancel_url: 'http://localhost:3000/explore/order/cancel',
          });
  
          const order = new Order({
              userId: user._id,
              products: lineItems.map((item) => ({
                  productId: item.productId,
                  quantity: item.quantity,
              })),
              totalPrice,
              status: "pending",
              shippingAddress,
          });
  
          await order.save();
          user.cart = [];
          await user.save();
  
  
          res.json({ session_id: session.id, order: lineItems });
  
      } catch (error) {
          console.error("Error placing order:", error);
          res.status(500).json({ error: "Internal Server Error" });
      }
  },
  
  
  
    updateShippingAddress: async (req: Request, res: Response) => {
      const userId = (req as any).user.userId;
      const { shippingAddress } = req.body;

      try {
        console.log(req.body);

        let user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        user.shippingAddress = shippingAddress;

        console.log("User before save:", user);

        await user.save();

        console.log("User after save:", user);

        res.json({ message: "Shipping address updated successfully", user });
      } catch (error) {
        console.error("Error updating shipping address:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    },

    vieworders: async (req: Request, res: Response) => {
      const userId = (req as any).user.userId;
    
      try {
        const orders = await Order.find({ userId })
          .populate({
            path: "products.productId",
            model: "Product",
          })
          .populate({
            path: "userId",
            model: "User",
            select: "shippingAddress", // Ensure that shippingAddress is populated from the User model
          });
    
        res.json(orders);
      } catch (error) {
        console.error("Error viewing order history:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    },
    
  

    // Placeholder for viewing the cart
    order: async (req: Request, res: Response) => {
      // Implement this function according to your requirements
      const userId = (req as any).user.userId;

      try {
        const orders = await Order.find({ userId }).populate({
          path: "products.productId",
          model: "Product",
        });

        res.json(orders);
      } catch (error) {
        console.error("Error viewing order history:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    },

    // Placeholder for removing products from the cart
    yourOrder: async (req: Request, res: Response) => {
      // Implement this function according to your requirements
      const userId = (req as any).user.userId;
      const orderId = req.params.orderId;

      try {
        const order = await Order.findOne({ _id: orderId, userId }).populate({
          path: "products.productId",
          model: "Product",
        });

        if (!order) {
          return res.status(404).json({ error: "Order not found" });
        }

        res.json(order);
      } catch (error) {
        console.error("Error viewing order:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    },
    removeOrder: async (req: Request, res: Response) => {
      const userId = (req as any).user.userId;
      const orderId = req.params.orderId;

      try {
        const order = await Order.findOne({ _id: orderId, userId });

        if (!order) {
          return res.status(404).json({ error: "Order not found" });
        }

        const user = await User.findById(userId);
        user.cart = [
          ...user.cart,
          ...order.products.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        ];

        await Order.deleteOne({ _id: orderId, userId });

        await user.save();

        res.json({ message: "Order canceled successfully" });
      } catch (error) {
        console.error("Error canceling order:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    },
  };

  export default OrderController;

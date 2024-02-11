import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/user";
import ProductModel, { ProductDocument } from "../models/product";

const ProductController = {
  allProducts: async (req: Request, res: Response) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  specificProducts: async (req: Request, res: Response) => {
    const category = req.query.category;
    const productType = req.query.producttype;

    try {
      let products;

      if (!category) {
        products = await ProductModel.find({ productType });
      } else {
        products = await ProductModel.find({ category });
      }

      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send({ message: "Internal server error", error });
    }
  },

  productId: async (req: Request, res: Response) => {
    const productId = req.params.productId;

    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Erreor" });
    }
  },

  addToCart: async (req: Request, res: Response) => {
    const productId = req.params.productId;
    const userId = (req as any).user.userId;
    const quantity = req.body.quantity;

    const product = await ProductModel.findById(productId);
    try {
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      const user = await User.findById(userId);

      const existingCartItemIndex = user.cart.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (existingCartItemIndex !== -1) {
        // If the product is already in the cart, update the quantity
        user.cart[existingCartItemIndex].quantity += quantity;
      } else {
        // If the product is not in the cart, add it
        user.cart.push({
          productId: product._id, // Use the correct type (ObjectId or ProductDocument)
          quantity,
        });
      }

      // Save the updated cart to the database
      await user.save();

      res.json({
        message: "Product successfully added to the cart",
        cartItem: {
          productId,
          quantity,
          product,
        },
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  viewCart: async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;

    try {
      const user = await User.findById(userId).populate({
        path: "cart.productId",
        model: "Product",
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(user.cart);
    } catch (error) {
      console.error("Error viewing cart:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

    removeFromCart: async (req: Request, res: Response) => {
      const productId = req.params.productId;
      const userId = (req as any).user.userId;

      try {
        const user = await User.findById(userId);

        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        user.cart = user.cart.filter(
          (item) => item.productId.toString() !== productId
        );
        await user.save();

        res.json({ message: "Product removed from the cart successfully"  });
      } catch (error) {
        console.error("Error removing product from cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    },

  customization: async (req: Request, res: Response) => {
    const productId = req.params.productId;

    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json({ color: product.customizationOptions[0]?.name });
    } catch (error) {
      console.error("Error getting customization options:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Update customization options for a specific product
  customizationProduct: async (req: Request, res: Response) => {
    const productId = req.params.productId;
    const { color } = req.body;

    try {
      const product = await ProductModel.findByIdAndUpdate(
        productId,
        { color },
        { new: true }
      );

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json({
        message: "Customization options updated successfully",
        color: product.customizationOptions[0]?.values,
      });
    } catch (error) {
      console.error("Error updating customization options:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getUser: async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    try {
      const user = await User.findOne(userId);
      res.status(200).send({ user });

      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  discountProducts: async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    try {
      const user = await User.findOne(userId);
      res.status(200).send({ user });

      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default ProductController;

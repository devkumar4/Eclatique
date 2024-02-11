import mongoose, { Document, Schema } from 'mongoose';

interface OrderProduct {
  productId: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

interface Order {
  userId: mongoose.Schema.Types.ObjectId;
  products: OrderProduct[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

interface OrderDocument extends Order, Document {}

const orderSchema = new Schema<Order>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending',
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
});

const OrderModel = mongoose.model<OrderDocument>('Order', orderSchema);

export default OrderModel;

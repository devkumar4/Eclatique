import mongoose, { Document, Schema } from "mongoose";
import { ProductDocument } from "./product";

export interface IUser extends Document {
  email?: string;
  password: string;
  firstName: string;
  phoneNumber: number;
  address: {
    street: string;
    city: string; 
    state: string;
    zip: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  cart: {
    productId: mongoose.Schema.Types.ObjectId | ProductDocument;
    quantity: number;
  }[];
}

const userSchema = new Schema({
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  cart: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;

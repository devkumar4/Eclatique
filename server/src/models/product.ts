import mongoose, { Document, Schema } from "mongoose";

export interface Product {
  name: string;
  description?: string;
  price: number;
  category?: string;
  product?: string;
  images: string[];
  variants: { name: string; options: string[] }[];
  stock?: number;
  customizationOptions?: { name: string; type: string; values: string[] }[];
  model3D?: string;
}

export interface ProductDocument extends Product, Document {}

const customizationOptionsSchema = new Schema({
  name: String,
  type: String,
  values: [String],
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: String,
  product: String,
  images: [String],
  variants: [
    {
      name: String,
      options: [String],
    },
  ],
  stock: {
    type: Number,
    default: 0,
  },
  customizationOptions: [customizationOptionsSchema],
  model3D: String,
});

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;

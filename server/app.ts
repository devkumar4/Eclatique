// app.ts
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes";
import productRoutes from "./src/routes/productRoutes";
// import authRoutes from "./src/routes/authRoutes";
import getUserProfile from "./src/routes/getUserProfile";
import Product from "./src/models/product";
import cookieParser from "cookie-parser";
import Products from "./data";

import orderRoutes from "./src/routes/orderRoutes";

dotenv.config();

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["Content-Length", "Authorization", "Content-Type"],
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL || "", {}).then(async () => {
  console.log("Connected to MongoDB");

  //   try {
  //     await Product.insertMany(Products);
  //     console.log("Sample products inserted successfully.");
  //   } catch (error) {
  //     console.error("Error inserting sample products:", error);
  //   } finally {
  //     mongoose.connection.close();
  //   }
  // })
  // .catch((error) => {
  //   console.error("Error connecting to MongoDB:", error);
});

app.use("/auth", userRoutes);
app.use("/user", getUserProfile);
app.use("/shop", productRoutes);
app.use("/order", orderRoutes);

export default app;

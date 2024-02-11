import express from "express";
import ProductController from "../controllers/productControllers";
import { verifyAndRefreshTokens } from "../middlewares/authentication";

const router = express.Router();

// Public routes (no token verification required)
router.get("/allProducts", ProductController.allProducts);

// Protected routes (require token verification)
router.get(
  "/oneProduct/:productId",
  verifyAndRefreshTokens,
  ProductController.productId
);
router.post(
  "/addToCart/:productId",
  verifyAndRefreshTokens,
  ProductController.addToCart
);
router.get("/viewCart", verifyAndRefreshTokens, ProductController.viewCart);
router.delete(
  "/removeCart/:productId",
  verifyAndRefreshTokens,
  ProductController.removeFromCart
);
router.get(
  "/products/:productId/customization",
  verifyAndRefreshTokens,
  ProductController.customization
);
router.patch(
  "/products/:productId/customization",
  verifyAndRefreshTokens,
  ProductController.customizationProduct
);
router.get(
  "/products",
  verifyAndRefreshTokens,
  ProductController.specificProducts
);

export default router;

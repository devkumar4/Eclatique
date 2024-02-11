import express from "express";
import OrderController from "../controllers/orderControllers";
import { verifyAndRefreshTokens } from "../middlewares/authentication";

const router = express.Router();

router.post("/orders", verifyAndRefreshTokens, OrderController.orders);
router.patch("/addAddress", verifyAndRefreshTokens, OrderController.updateShippingAddress);
router.get(
  "/ordersHistory",
  verifyAndRefreshTokens,
  OrderController.vieworders
);
router.get("/orders/:orderId", verifyAndRefreshTokens, OrderController.order);
router.delete(
  "/orders/:orderId",
  verifyAndRefreshTokens,
  OrderController.removeOrder
);

export default router;
  
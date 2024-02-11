import express from "express";
import UserController from "../controllers/userControllers";
import { verifyAndRefreshTokens } from "../middlewares/authentication";

const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);
router.post("/logout", UserController.logout);

export default router;

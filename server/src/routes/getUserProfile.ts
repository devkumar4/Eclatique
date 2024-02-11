import express from "express";
import { verifyAndRefreshTokens } from "../middlewares/authentication";
import getUserController from "../controllers/getUserControllers";

const router = express.Router();

router.get("/getUser", verifyAndRefreshTokens, getUserController.getUser);

export default router;

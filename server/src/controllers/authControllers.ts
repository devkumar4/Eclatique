import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyRefreshToken } from "../utils/authUtils";

const AuthController = {
  refresh: async (req: Request, res: Response) => {
    try {
      const { refreshToken }: { refreshToken: string } = req.body;

      if (!refreshToken) {
        return res.status(401).json({ error: "Refresh token is required." });
      }

      const user = await verifyRefreshToken(refreshToken);

      const newAccessToken = jwt.sign(
        { userId: user.userId, username: user.username },
        process.env.JWT_SECRET || "",
        { expiresIn: "1h" }
      );
      res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
      console.error("Error during token refresh:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default AuthController;

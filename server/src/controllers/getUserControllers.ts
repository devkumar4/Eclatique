import { Request, Response } from "express";
import User from "../models/user";

const getUserController = {
  getUser: async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    try {
      if (!userId) {
        res.status(404).send({ message: "Please signin" });
        return;
      }
      const user = await User.findOne(userId);
      res.status(200).send({ user });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default getUserController;

import { Request, Response } from "express";
import User from "../models/user";
import { generateTokens } from "../utils/authUtils";
import bcrypt from "bcrypt";

const UserController = {
  signup: async (req: Request, res: Response) => {
    try {
      const {
        firstName,
        email,
        phoneNumber,
        password,
      }: {
        firstName: string;
        email: string;
        password: string;
        phoneNumber: number;
      } = req.body;
      console.log(req.body);

      if (!firstName || !phoneNumber || !password) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const existingUser = await User.findOne({ phoneNumber });
      if (existingUser) {
        return res.status(400).json({ error: "phoneNumber is already taken." });
      }

      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: "Email is already registered." });
      }

      const hashedPassword: string = await bcrypt.hash(password, 12);

      // Create a new user
      const newUser = new User({
        firstName,
        email,
        phoneNumber,
        password: hashedPassword,
      });

      await newUser.save();

      const { accessToken, refreshToken } = generateTokens(newUser);
      res.status(201).json({
        message: "User created successfully",
        accessToken,
        refreshToken,
      });

      return newUser;
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  signin: async (req: Request, res: Response) => {
    try {
      const {
        firstName,
        password,
        phoneNumber,
      }: { firstName: string; password: string; phoneNumber: number } =
        req.body;

      if (!firstName || !password || !phoneNumber) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const existingUser = await User.findOne({ firstName, phoneNumber });
      if (!existingUser) {
        return res
          .status(400)
          .json({ error: "Invalid firstName or password." });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ error: "Invalid firstName or password." });
      }

      const { accessToken, refreshToken } = generateTokens(existingUser);
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res
        .status(200)
        .json({ accessToken, refreshToken, firstName, phoneNumber });
    } catch (error) {
      console.error("Error during signin:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie("accessToken", { httpOnly: true});
      res.clearCookie("refreshToken", { httpOnly: true });
      
  
      res.status(204).send();
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  
};

export default UserController;

import jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";
import { verifyRefreshToken } from "../utils/authUtils";
import User from "../models/user";

export const verifyAndRefreshTokens = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies?.accessToken;
  const refreshToken = req.cookies?.refreshToken;
  // if (!accessToken || !refreshToken) {
  //   // If either accessToken or refreshToken is missing, send an error response
  //   return res.status(404).json({ error: "Session Expired!" });
  // }

  try {
    console.log(req.cookies);
    console.log(req.headers);
    console.log(refreshToken, "DEVVEHEJEJEJEJEJEJ");
    console.log(accessToken + "Devebej");

    const decodedAccessToken = jwt.verify(
      accessToken,
      process.env.JWT_SECRET || ""
    ) as { userId: string; username: string };

    console.log("Decoded Access Token:", decodedAccessToken);

    const user = await User.findById(decodedAccessToken.userId);

    if (!user) {
      console.log("User not found");
      return next();
    }

    (req as any).user = {
      userId: user._id,
      name: user.firstName,
    };

    // console.log('User details attached to request:', (req as any).user);

    return next();
  } catch (accessTokenError) {
    if (accessTokenError.name === "TokenExpiredError") {
      try {
        const decodedRefreshToken = await verifyRefreshToken(refreshToken);

        console.log("Decoded Refresh Tokennnnnnnnnnn:", decodedRefreshToken);

        const user = await User.findById(decodedRefreshToken.userId);
        console.log(user + "Devvv");

        if (!user) {
          console.log("User not foundd");
          return next();
        }

        const newAccessToken = jwt.sign(
          {
            userId: user._id,
            name: user.firstName,
          },
          process.env.JWT_SECRET || "",
          { expiresIn: "8h" }
        );

        res.cookie("accessToken", newAccessToken, { httpOnly: true });

        (req as any).user = {
          userId: user._id,
          name: user.firstName,
          phoneNumber: user.phoneNumber,
        };

        // console.log('User details attached to request after refreshing token:', (req as any).user);

        return next();
      } catch (refreshErr) {
        console.log("Error refreshing token:", refreshErr);
        return next();
      }
    } else {
      console.log("Error verifying access token:", accessTokenError);
      return next();
    }
  }
};

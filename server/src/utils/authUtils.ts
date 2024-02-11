import jwt from "jsonwebtoken";

export const generateTokens = (user: any) => {
  const accessToken = jwt.sign(
    { userId: user._id, firstName: user.firstName },
    process.env.JWT_SECRET || "",
    { expiresIn: "5h" }
  );
  const refreshToken = jwt.sign(
    { userId: user._id, firstName: user.firstName },
    process.env.JWT_REFRESH_SECRET || "",
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

export const verifyRefreshToken = (refreshToken: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET || "",
      (err, user: any) => {
        if (err) {
          reject({ error: "Invalid refresh token." });
        } else {
          resolve(user);
        }
      }
    );
  });
};

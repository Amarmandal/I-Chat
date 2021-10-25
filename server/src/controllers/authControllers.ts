import { Response } from "express";
import { IGetUserAuthInfo } from "../interfaces/IUser";

export const authenticateWithGoogle = (
  req: IGetUserAuthInfo,
  res: Response
) => {
  if (!req.user) {
    return res.status(404).json({ message: "User not authorize" });
  }

  return res
    .cookie("test", "test", { maxAge: 1000 * 60 * 5 })
    .redirect(
      `http://localhost:3000/signup?googleId=${req.user?.value.googleId}`
    );
};

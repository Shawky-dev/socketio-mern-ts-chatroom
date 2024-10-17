import jwt from "jsonwebtoken"
import { Response } from "express"

export const generateTokenAndSetCookie = (res: Response, userID: string) => {
  const token: string = jwt.sign({ userID }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  })
  res.cookie("token", token, {
    httpOnly: true, //prevents xss attacks
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
  return token
}

import { NextFunction, Request, Response } from "express"
import User from "../models/user.model"
import { Error } from "mongoose"
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie"
import Jwt from "jsonwebtoken"
import { CustomRequest } from "../middleware/verifyToken"

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password, name } = req.body

  try {
    // Check if all fields are provided
    if (!email || !password || !name) {
      res
        .status(400)
        .json({ success: false, message: "All fields are required" })
      return
    }

    // Check if the user already exists
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
      res.status(400).json({ success: false, message: "User already exists" })
      return
    }

    // Hash the password
    const hashedPassword: string = await bcrypt.hash(password, 10)

    // Create a new user
    const user = new User({
      email,
      password: hashedPassword,
      name,
    })

    await user.save()
    generateTokenAndSetCookie(res, user._id)

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user.toObject(), // Properly convert mongoose document to a plain object
        password: null, // Hide the password
      },
    })
    return
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message })
    return
  }
}
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(400).json({ success: false, message: "invalid credentials" })
      return
    }
    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password
    )
    if (!isPasswordValid) {
      res.status(400).json({ success: false, message: "invalid credentials" })
      return
    }
    generateTokenAndSetCookie(res, user._id)

    user.lastLogin = new Date()
    await user.save()
    res.status(200).json({
      success: true,
      message: "logged in successfully",
      user: {
        ...user._doc,
        password: null,
      },
    })
  } catch (error) {}
}
export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token")
  res.status(200).json({ success: true, message: "logged out successfully" })
}

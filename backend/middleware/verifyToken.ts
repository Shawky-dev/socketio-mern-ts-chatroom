import { NextFunction, Response, Request } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"

export interface CustomRequest extends Request {
  userID?: string
}

export const verifyToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies?.token
  if (!token) {
    res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" })
    return
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload

    if (!decoded || !decoded.userID) {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" })
      return
    }

    req.userID = decoded.userID // Attach user ID to request
    next()
  } catch (error) {
    console.log("Error in verifyToken:", error)
    res.status(500).json({ success: false, message: "Server error" })
    return
  }
}

export default verifyToken

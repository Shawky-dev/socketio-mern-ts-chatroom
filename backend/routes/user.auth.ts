import express, { Router, Request, Response } from "express"
import { login, logout, signup } from "../controllers/auth.controller"
import { verifyToken } from "../middleware/verifyToken"
import { CustomRequest } from "../middleware/verifyToken"

const router: Router = express.Router()

router.post("/login", login)
router.post("/signup", signup)
router.post("/logout", logout)

router.get(
  "/check-auth",
  verifyToken,
  async (req: CustomRequest, res: Response) => {
    res
      .status(200)
      .json({ success: true, message: "Access granted!", userID: req.userID })
  }
)

export default router

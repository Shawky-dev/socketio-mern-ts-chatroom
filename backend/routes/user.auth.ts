import express, { Router, Request, Response } from "express"
import { login, logout, signup } from "../controllers/auth.controller"
const router: Router = express.Router()

router.post("/login", login)
router.post("/signup", signup)
router.post("/logout", logout)

export default router

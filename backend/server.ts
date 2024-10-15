import express, { Request, Response } from "express"
import dotenv from "dotenv"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"
import userAuth from "./routes/user.auth"

dotenv.config()
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
})
const PORT = process.env.PORT

//Middleware__
app.use(cors())
app.use(express.json())
//Routes
app.use("/auth", userAuth)

io.on("connection", (socket) => {
  console.log(`${socket.id} just connected`)
  socket.on("chatMessage", (message) => {
    console.log("Message received:", message)
    socket.broadcast.emit("showMessage", message)
  })

  socket.on("disconnect", () => {
    console.log(`${socket.id} just disconnected`)
  })
})

server
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT)
  })
  .on("error", (error) => {
    throw new Error(error.message)
  })

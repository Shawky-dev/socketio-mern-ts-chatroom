import express, { Request, Response } from "express"
import dotenv from "dotenv"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"

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

app.use(cors())

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World")
})

io.on("connection", (socket) => {
  console.log(`${socket.id} just connected`)
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

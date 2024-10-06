import React from "react"
import io from "socket.io-client" // Alternative import
import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
const socket = io.connect("http://localhost:3000")
type Props = {}

export default function App({}: Props) {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <div className="flex h-screen flex-row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

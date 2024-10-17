"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Cog,
  LogOut,
  MessageSquare,
  Phone,
  Plus,
  Send,
  Users,
  Video,
} from "lucide-react"
import SmallSidebar from "@/components/SmallSidebar"
import MainSidebar from "@/components/MainSidebar"
import Chatarea from "@/components/Chatarea"
import { useNavigate } from "react-router-dom"
import axiosInstance from "@/api/axiosConfig"

export default function Home() {
  const navigate = useNavigate()

  // Check if the user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:3000/auth/check-auth"
        )
        if (response.data.success) {
        }
      } catch (error) {
        console.error("User is not authenticated:", error)
        navigate("/login")

        // If there's an error (e.g., token invalid), the user stays on the home page
      }
    }

    checkAuth()
  }, [navigate])
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Small sidebar */}
      <SmallSidebar />
      {/* Main sidebar */}
      <MainSidebar />
      {/* Chat area */}
      <Chatarea />
    </div>
  )
}

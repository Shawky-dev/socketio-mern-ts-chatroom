"use client"

import { useState } from "react"
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

export default function Home() {
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

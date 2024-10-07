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

export default function ChatApp() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      content: "Hey, how's it going?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "You",
      content: "Not bad, just working on a new project. You?",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      sender: "John Doe",
      content: "Same here. Want to catch up later?",
      timestamp: "10:33 AM",
    },
  ])

  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          content: inputMessage,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ])
      setInputMessage("")
    }
  }

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

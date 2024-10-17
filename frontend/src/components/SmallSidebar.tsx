import React from "react"
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
import axiosInstance from "@/api/axiosConfig"
import { useNavigate } from "react-router-dom"
type Props = {}

export default function SmallSidebar({}: Props) {
  const navigate = useNavigate()

  const logout = async () => {
    try {
      const response = await axiosInstance.post(
        "http://localhost:3000/auth/logout",
        {
          withCredentials: true,
        }
      )
      navigate("/")
    } catch (error) {
      console.error("Unable to logout:", error)
    }
  }
  return (
    <div className="w-20 bg-gray-900 p-3 flex flex-col items-center justify-between">
      <div className="space-y-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder-user.jpg" alt="@yourusername" />
          <AvatarFallback>YU</AvatarFallback>
        </Avatar>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-950"
        >
          <MessageSquare size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-950"
        >
          <Phone size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-950"
        >
          <Video size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-950"
        >
          <Users size={24} />
        </Button>
      </div>
      <div className="space-y-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-950"
        >
          <Cog size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-950"
          onClick={logout}
        >
          <LogOut size={24} />
        </Button>
      </div>
    </div>
  )
}

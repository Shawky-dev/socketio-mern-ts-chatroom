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
type Props = {}

export default function SmallSidebar({}: Props) {
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
          className="text-gray-400 hover:text-white"
        >
          <MessageSquare size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Phone size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Video size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Users size={24} />
        </Button>
      </div>
      <div className="space-y-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Cog size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <LogOut size={24} />
        </Button>
      </div>
    </div>
  )
}

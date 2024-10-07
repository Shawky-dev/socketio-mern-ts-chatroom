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

export default function MainSidebar({}: Props) {
  return (
    <div className="w-64 bg-white border-r h-screen overflow-clip">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" /> New Chat
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
          >
            <Avatar>
              <AvatarImage
                src={`/placeholder.svg?height=32&width=32`}
                alt={`Contact ${i + 1}`}
              />
              <AvatarFallback>{`C${i + 1}`}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Contact {i + 1}</p>
              <p className="text-sm text-gray-500">Last message...</p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

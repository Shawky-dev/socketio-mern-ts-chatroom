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
import Contacts from "./MainSidebar-comp/Contacts"
import Profile from "./MainSidebar-comp/Profile"
type Props = {}

export default function MainSidebar({}: Props) {
  return (
    <div className="w-1/4 bg-gray-200 border-r h-screen overflow-clip">
      <h2 className="text-xl font-semibold p-4">Chats</h2>
      <div className="bg-gray-300">
        {/* <Contacts /> */}
        <Profile />
      </div>
    </div>
  )
}

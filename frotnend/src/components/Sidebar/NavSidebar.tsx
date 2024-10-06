import React from "react"
import { FiMessageSquare, FiUsers, FiSettings } from "react-icons/fi"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const NavSidebar = () => {
  return (
    <div className="w-16 bg-gray-900 flex flex-col items-center p-2 space-y-4 h-screen relative">
      <div className="text-green-400">
        <FiMessageSquare size={24} />
      </div>
      <div className="text-gray-400">
        <FiUsers size={24} />
      </div>
      <div className="text-gray-400">
        <FiSettings size={24} />
      </div>

      {/* Avatar at the bottom */}
      <div className="absolute bottom-0 mb-4 py-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default NavSidebar

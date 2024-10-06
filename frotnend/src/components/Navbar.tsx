import React from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Chat App</h1>

        <div className="space-x-4 flex-row flex">
          <Button variant="link" className="text-white">
            Home
          </Button>
          <Button variant="link" className="text-white">
            Settings
          </Button>
          <Avatar className="flex justify-between items-center">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}

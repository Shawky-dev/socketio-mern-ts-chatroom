import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Plus } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"

type Props = {}

export default function Contacts({}: Props) {
  return (
    <div>
      {/*chats */}
      <div className="p-4">
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

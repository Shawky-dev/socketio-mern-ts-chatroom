import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const ChatSidebar = () => {
  return (
    <div className="flex-auto bg-gray-900 text-white p-4 h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Chats</h2>
        <Button variant="default" className="text-white">
          +
        </Button>
      </div>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search"
        className="mt-4 bg-gray-700 text-white border-none focus:ring-2 focus:ring-green-500"
      />

      {/* Filters */}
      <div className="flex mt-4 space-x-2">
        <Button variant="default" className="bg-green-500 rounded-full">
          All
        </Button>
        <Button variant="default" className="text-white">
          Unread
        </Button>
        <Button variant="default" className="text-white">
          Groups
        </Button>
      </div>

      {/* Chats List */}
      <ScrollArea className="mt-4 space-y-4 h-[calc(100vh-200px)]">
        <Card className="mb-2 p-3 bg-gray-700  flex items-center cursor-pointer hover:bg-gray-600 border-none">
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-400">Hey! How are you?</p>
          </div>
        </Card>
        <Card className="mb-2 p-3 bg-gray-700  flex items-center cursor-pointer hover:bg-gray-600 border-none">
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-400">Hey! How are you?</p>
          </div>
        </Card>
      </ScrollArea>
    </div>
  )
}

export default ChatSidebar

import ChatRoom from "@/components/Chatroom"
import React from "react"

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="basis-4/6 flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gray-100 border-b border-gray-300 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-400 mr-4"></div>
        <p className="font-medium">John Doe</p>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Incoming message */}
        <div className="flex mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-400 mr-4"></div>
          <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
            <p>Hello! How are you?</p>
          </div>
        </div>

        {/* Outgoing message */}
        <div className="flex justify-end mb-4">
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
            <p>I am good! How about you?</p>
          </div>
        </div>

        {/* Add more messages here */}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 rounded-md border border-gray-300"
        />
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Send
        </button>
      </div>
    </div>
  )
}

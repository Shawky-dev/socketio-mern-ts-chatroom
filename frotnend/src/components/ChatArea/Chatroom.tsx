import INCmessage from "./INCmessage"
import OUTGmessage from "./OUTGmessage"
import io from "socket.io-client"
import React, { useState } from "react"
const socket = io.connect("http://localhost:3000")
type Props = {}

function Chatroom({}: Props) {
  const [message, setMessage] = useState<string>("")
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chatMessage", message)
      setMessage("")
    }
  }

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
        <INCmessage />
        {/* Outgoing message */}
        <OUTGmessage />
      </div>
      {/* Message Input */}
      <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-md border border-gray-300"
        />
        <button
          onClick={sendMessage}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Chatroom

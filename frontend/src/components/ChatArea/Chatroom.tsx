import Message from "./Message"
import io from "socket.io-client"
import React, { useEffect, useState } from "react"
const socket = io.connect("http://localhost:3000")

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
type Props = {}

type message = {
  incoming: boolean
  text: string
}

function Chatroom({}: Props) {
  const [text, setText] = useState<string>("")
  const [messages, setMessages] = useState<message[]>([])
  useEffect(() => {
    socket.on("showMessage", (msg: string) => {
      setMessages([...messages, { incoming: true, text: msg }])
    })

    return () => {
      socket.off("showMessage")
    }
  }, [messages])

  const sendMessage = () => {
    if (text.trim()) {
      socket.emit("chatMessage", text)
      setMessages([...messages, { incoming: false, text: text }])
      setText("")
    }
  }

  return (
    <div className="basis-4/6 flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gray-700 border-b border-gray-600 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
        <p className="font-medium text-white">John Doe</p>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 overflow-y-auto bg-gray-800">
        {messages.map((m, index) => (
          <Message key={index} text={m.text} incoming={m.incoming} />
        ))}
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 bg-gray-700 border-t border-gray-600 flex items-center">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage()
          }}
          placeholder="Type your message..."
          className="flex-1 bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-green-500"
        />
        <Button onClick={sendMessage} className="ml-4 bg-green-500 text-white">
          Send
        </Button>
      </div>
    </div>
  )
}

export default Chatroom

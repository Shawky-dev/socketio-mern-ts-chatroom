import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

import Message from "./Message"

import io from "socket.io-client"
const socket = io("http://localhost:3000")

type message = {
  incoming: boolean
  text: string
}

type Props = {}

export default function Chatarea({}: Props) {
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
    <div className="flex-1 flex flex-col">
      <div className="bg-white p-4 shadow">
        <h2 className="text-xl font-semibold">John Doe</h2>
      </div>
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <Message incoming={message.incoming} text={message.text} />
        ))}
      </ScrollArea>
      <div className="bg-white p-4 border-t flex">
        <Input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage()
          }}
          className="flex-1 mr-2"
        />
        <Button onClick={sendMessage}>
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  )
}

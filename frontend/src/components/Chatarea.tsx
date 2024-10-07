import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

import io from "socket.io-client"
import Message from "./Message"
const socket = io("http://localhost:3000")

type messge = {
  incoming: boolean
  text: string
}

type Props = {}

export default function Chatarea({}: Props) {
  const [messages, setMessages] = useState<messge[]>([
    { incoming: true, text: "1" },
    { incoming: false, text: "2" },
    { incoming: true, text: "3" },
    { incoming: false, text: "4" },
  ])
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
          placeholder="Type a message..."
          className="flex-1 mr-2"
        />
        <Button type="submit">
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  )
}

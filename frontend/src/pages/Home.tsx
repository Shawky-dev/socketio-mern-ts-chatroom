import ChatRoom from "@/components/ChatArea/Chatroom"
import Sidebar from "@/components/Sidebar/Sidebar"

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="flex h-screen flex-row">
      <Sidebar />
      <ChatRoom />
    </div>
  )
}

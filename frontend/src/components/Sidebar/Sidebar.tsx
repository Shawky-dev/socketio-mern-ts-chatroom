import React from "react"
import ChatSidebar from "./ChatSidebar"
import NavSidebar from "./NavSidebar"

const Sidebar = () => {
  return (
    <div className="flex h-screen basis-2/6">
      <NavSidebar />
      <ChatSidebar />
    </div>
  )
}
export default Sidebar

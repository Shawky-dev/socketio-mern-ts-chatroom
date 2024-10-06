import React from "react"

const ChatSidebar = () => {
  return (
    <div className="flex-auto bg-gray-800 text-white p-4 h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Chats</h2>
        <button className="text-white">+</button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="w-full mt-4 px-3 py-2 rounded-md bg-gray-700 border-none focus:ring-2 focus:ring-green-500"
      />

      {/* Filters */}
      <div className="flex mt-4 space-x-2">
        <button className="px-3 py-1 bg-green-500 rounded-full text-white">
          All
        </button>
        <button className="px-3 py-1 bg-gray-700 rounded-full text-white">
          Unread
        </button>
        <button className="px-3 py-1 bg-gray-700 rounded-full text-white">
          Groups
        </button>
      </div>

      {/* Chats List */}
      <div className="mt-4 space-y-4 overflow-y-auto h-[calc(100vh-200px)]">
        {" "}
        {/* Adjust height as needed */}
        <div className="p-3 bg-gray-700 rounded-md flex items-center cursor-pointer hover:bg-gray-600">
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-400">Hey! How are you?</p>
          </div>
        </div>
        {/* Add more chat items here */}
        {/* Example additional items */}
        <div className="p-3 bg-gray-700 rounded-md flex items-center cursor-pointer hover:bg-gray-600">
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
          <div>
            <p className="font-medium">Jane Smith</p>
            <p className="text-sm text-gray-400">Let’s meet tomorrow.</p>
          </div>
        </div>
        <div className="p-3 bg-gray-700 rounded-md flex items-center cursor-pointer hover:bg-gray-600">
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
          <div>
            <p className="font-medium">Alice Johnson</p>
            <p className="text-sm text-gray-400">Can you send me the files?</p>
          </div>
        </div>
        {/* You can add more items similarly */}
      </div>
    </div>
  )
}

export default ChatSidebar

import React, { useState } from "react"
import { Edit2 } from "lucide-react" // Importing an edit icon
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Profile: React.FC = () => {
  const [name, setName] = useState("Ahmed Shawky")
  const [about, setAbout] = useState("🙂")
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingAbout, setIsEditingAbout] = useState(false)

  const handleEditName = () => setIsEditingName(!isEditingName)
  const handleEditAbout = () => setIsEditingAbout(!isEditingAbout)

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg h-[calc(100vh-5rem)]">
      {/* Profile Avatar */}
      <div className="flex justify-center mb-6 bg-white rounded-lg p-10">
        <Avatar className="w-32 h-32 border-4 border-gray-700">
          <AvatarImage src="https://via.placeholder.com/150" alt="Profile" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      </div>

      {/* Name Section */}
      <div className="mb-4 bg-white rounded p-4">
        <p className="text-sm text-green-800">Your name</p>
        <div className="flex items-center justify-between">
          {isEditingName ? (
            <Input
              type="text"
              value={name}
              onChange={(e: {
                target: { value: React.SetStateAction<string> }
              }) => setName(e.target.value)}
              className="w-full bg-gray-100 text-black p-2 rounded-md font-semibold text-xl"
            />
          ) : (
            <p className="text-xl font-semibold">{name}</p>
          )}
          <Button
            variant="ghost"
            className="ml-2 text-gray-400"
            onClick={handleEditName}
          >
            <Edit2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded p-4">
        <p className="text-sm text-green-800">About</p>
        <div className="flex items-center justify-between">
          {isEditingAbout ? (
            <Input
              type="text"
              value={about}
              onChange={(e: {
                target: { value: React.SetStateAction<string> }
              }) => setAbout(e.target.value)}
              className="w-full bg-gray-100 text-black font-semibold p-2 rounded-md text-xl"
            />
          ) : (
            <p className="text-xl">{about}</p>
          )}
          <Button
            variant="ghost"
            className="ml-2 text-gray-400"
            onClick={handleEditAbout}
          >
            <Edit2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile

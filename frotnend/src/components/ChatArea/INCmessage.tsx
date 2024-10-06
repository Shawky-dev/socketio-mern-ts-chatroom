import React from "react"

type Props = {}

export default function INCmessage({}: Props) {
  return (
    <div className="flex mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-400 mr-4"></div>
      <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
        <p>Hello! How are you?</p>
      </div>
    </div>
  )
}

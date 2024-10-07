import React from "react"

type Props = {
  text: string
  incoming: boolean
}

export default function Message({ text, incoming }: Props) {
  return incoming ? (
    <div className="flex mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-400 mr-4"></div>
      <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className="flex justify-end mb-4">
      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
        <p>{text}</p>
      </div>
    </div>
  )
}

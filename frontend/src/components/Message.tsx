import React from "react"

type Props = {
  incoming: boolean
  text: string
}

export default function Message({ incoming, text }: Props) {
  return incoming ? (
    <div className="flex flex-col mb-4 items-start">
      <div className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
        {text}
      </div>
      <span className="text-xs text-gray-500 mt-1">10:00 AM</span>
    </div>
  ) : (
    <div className="flex flex-col mb-4 items-end">
      <div className="px-4 py-2 rounded-lg bg-blue-500 text-white">{text}</div>
      <span className="text-xs text-gray-500 mt-1">10:02 AM</span>
    </div>
  )
}

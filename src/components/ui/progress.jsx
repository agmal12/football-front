// src/components/ui/progress.jsx
import React from "react"

export function Progress({ value, max = 100 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-green-500 h-4 rounded-full transition-all duration-300"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
}

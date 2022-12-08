import React from 'react'
import './panel.css'
const StatusBadge = ({status}) => {
  return (
    <span class={`badge badge-status ${status === "answered" ? "bg-answered": "bg-notanswered"}`}>{status}</span>
  )
}

export default StatusBadge
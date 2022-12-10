import React from 'react'
import './panel.css'
const StatusBadge = ({status}) => {
  return (
    <span className={`badge badge-status ${status === "answered" ? "bg-answered": "bg-notanswered"}`}>{status}</span>
  )
}

export default StatusBadge
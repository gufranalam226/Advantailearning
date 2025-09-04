import React from 'react'
import { useParams } from 'react-router-dom'
export default function EventDetailPage() {
    const param = useParams()
  return (
    <div>
      event details page
      <div>{param.id}</div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const EVENTS = [
{
    id : 'e1',
    title : 'some event'
},
{
    id : 'e2',
    title : 'more event'
},
{
    id : 'e3',
    title : 'last event'
}
]

export default function EventPage() {
  return (
    <div>
      event page
      <ul>
        {EVENTS.map((event)=><li> <Link to={event.id}>{event.title}</Link></li>)}
      </ul>
    </div>
  )
}

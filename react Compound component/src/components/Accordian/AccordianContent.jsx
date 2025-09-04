import React from 'react'
import { useAccordion } from './Accordian.jsx'

export default function AccordianContent({id,className, children}) {
    const {openItemId} = useAccordion()
    console.log(id, openItemId)
    const isOpen = openItemId === id

  return (
    <div className={`accordion-item-content ${className ? className : ''} ${isOpen ? 'open' : ''}`}>{children}</div>
  )
}

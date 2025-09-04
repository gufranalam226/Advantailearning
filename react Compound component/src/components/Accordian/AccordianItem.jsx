import React from 'react'
import { useAccordion } from './Accordian.jsx'

export default function AccordionItem({className, children}) {
    const {openItemId, toggleItem} = useAccordion()
  
  return (
    <li className={className}>
        {children}
      
    </li>
  )
}

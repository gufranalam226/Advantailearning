import React from 'react'
import { useAccordion } from './Accordian.jsx'

export default function AccordianTitle({id,className, children}) {
    const {toggleItem} = useAccordion()
  return (
    <h3 className={className} onClick={()=>toggleItem(id)}>{children}</h3>

  )
}

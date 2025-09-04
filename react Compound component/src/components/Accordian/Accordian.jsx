import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import AccordionItem from './AccordianItem'

const AccordionContext = createContext()

export function useAccordion(){
    const ctx = useContext(AccordionContext)

    if(!ctx){
        throw new Error('Accordian must be wrap by accordian component.')
    }
    return ctx
}

export default function Accordion({id, children, className}) {
    const [openItemId, setOpenItemId] = useState()

    function toggleItem(id){
        console.log(id)
        setOpenItemId(prevId => prevId===id?null : id)

    }
    

    const contextValue = {
        openItemId,
        toggleItem
        
    }
  return (
    <AccordionContext.Provider value={contextValue}>
        <ul className={className}>
            {children}
        
        </ul>

    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem
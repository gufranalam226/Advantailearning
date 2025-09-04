import React, { useRef, useState } from 'react'

export default function SearchableList({items, children}) {
    const [searchTerm, setSearchTerm] = useState('')
    const lastChange = useRef()

    const searchResult = items.filter((item)=> JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleChange(event){
        if(lastChange.current){
            clearTimeout(lastChange.current)
        }
        lastChange.current = setTimeout(()=>{
            lastChange.current = null
            setSearchTerm(event.target.value)

        }, 500)
    }

  return (
    <div className='searchable-list'>
        <input type="search" placeholder='Search' onChange={handleChange} />
        <ul>
            {searchResult.map((item, index)=>(
                <li key={index}>{children(item)}</li>
            ))}
        </ul>
      
    </div>
  )
}

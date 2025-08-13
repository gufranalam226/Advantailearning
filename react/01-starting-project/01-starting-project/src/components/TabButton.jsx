import React from 'react'

function TabButton({children, isSelected, ...props}) {
  return (
    <li>
        <button className={isSelected?'active':undefined} onClick={props.onSelect}>{children}</button>
      
    </li>
  )
}

export default TabButton

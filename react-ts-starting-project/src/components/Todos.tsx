import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'

const Todos:React.FC<{items: Todo[]}> = ( props ) => {
  return (
    <div>
        {props.children}<br/>
        {props.items.map((item)=><TodoItem key={item.id} text={item.text}/>)}
      
    </div>
  )
}

export default Todos

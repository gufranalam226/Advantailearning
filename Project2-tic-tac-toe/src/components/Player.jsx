import React, {useState} from 'react'

function Player({playerName, playerSymbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(playerName)
    function handleEditClick(){
        setIsEditing(editing=>!editing)
        if(isEditing)
        onChangeName(playerSymbol, name)
    }
  return (
    <li className={isActive?'active':undefined}>
        <span className='player'>
            {isEditing ? <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} required></input> : <span className="player-name">{name}</span>}
            
            <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
    </li>
  )
}

export default Player

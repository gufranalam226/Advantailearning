import React, { useState } from 'react'



function GameBord({onSelectSquare, board}) {
    

  return (
    <ol id='game-board'>
        {board.map((row, rowIndex)=>(
            <li keys={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=>(
                        <li keys={colIndex}><button onClick={()=>{onSelectSquare(rowIndex, colIndex)}} disabled={playerSymbol !== null}>{playerSymbol}</button></li>
                    ))}

                </ol>
            </li>
        ))}
      
    </ol>
  )
}

export default GameBord

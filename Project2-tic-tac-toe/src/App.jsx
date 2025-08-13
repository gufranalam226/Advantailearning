import { useState } from "react"
import GameBord from "./components/GameBord"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"
import GameOver from "./components/GameOver.jsx"

const inititalGameBoaard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]




function App() {
  const [players, setPlayers] = useState({'X' : 'Player 1', 'O': 'Player 2'})
  const [gameTurn, setGameTurn] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  let gameBoard = [...inititalGameBoaard.map((array)=>[...array])];
  for(const turn of gameTurn){
      const {square , player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player
  }
  let winner = undefined
  for(const combinations of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

    if(firstSquareSymbol && (firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)){
      winner = players[firstSquareSymbol]
    }
    console.log(firstSquareSymbol)
  }

  const hasDraw = gameTurn.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((currActivePlayer)=> currActivePlayer == 'X'?"O":"X")
    setGameTurn((prevTurn)=>{
      let currentPlayer = 'X'
      if(prevTurn.length > 0 && prevTurn[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{square : {row : rowIndex, col: colIndex}, player: activePlayer} , ...prevTurn]
      return updatedTurns
    })
  }

  function handleRestart(){
    setGameTurn([])
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers((prevPlayer)=>{
      return {
        ...prevPlayer,
        [symbol] : newName
      }
    })
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName='Player 1' playerSymbol = 'X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player playerName='Player 2' playerSymbol = 'O' isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver onRestart={handleRestart} winner={winner}/>}
        <GameBord onSelectSquare={handleSelectSquare} board={gameBoard}/>
        
      </div>
      <Log turns={gameTurn}/>
    </main>
  )
}

export default App

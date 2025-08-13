import react, {useRef, useState} from 'react'


export default function Player() {
  const name = useRef()
  const [playerName, setPlayerName] = useState(null)
 
  function handleBtnClick(){
    setPlayerName(name.current.value)
    setPlayerName('')
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"} </h2>
      <p>
        <input ref={name} type="text"/>
        <button onClick={handleBtnClick}>Set Name</button>
      </p>
    </section>
  );
}

import { useRef } from "react"

const NewTodo:React.FC<{onAddTodo : (text : string)=>void }> = (props) => {
    const userText = useRef<HTMLInputElement>(null)
    const submitHandler =(event:React.FormEvent)=>{
        event.preventDefault()
        const enteredText = userText.current!.value

        if(enteredText?.trim().length === 0){
            return
        }
        props.onAddTodo(enteredText)

        userText.current!.value = ''
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={userText}/>
        <button>Add Todo</button>x

    </form>
}

export default NewTodo
import { use } from "react"
import { useActionState } from "react"
import { OpinionsContext } from "../store/opinions-context"
import Submit from "./Submit"


export function NewOpinion() {
  const {addOpinion} = use(OpinionsContext)

  async function shareOpinionAction(prevFormState, formDate){
    const title = formDate.get('title')
    const body = formDate.get('body')
    const userName = formDate.get('userName')

    let errors = []
    if(title.trim().length < 5){
      errors.push('Title must be greater then five characters.')
    }
    if(body.trim().length < 10 || body.trim().length > 300){
      errors.push('Opinion must be between 10 and 300 characters long.')
    }
    if(!userName.trim()){
      errors.push('Please provide yourName')
    }
    if(errors.length > 0){
      return {errors, enteredValues : {
        title, body, userName
      }}
    }
    await addOpinion({title, userName, body})
    return {errors : null}
  }

  const [formState, formAction] = useActionState(shareOpinionAction, {errors : null})
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>

        {formState.errors && (<ul className="errors">
          {formState.errors.map((error)=><li  key={error}>{error}</li>)}
        </ul>)}

        <Submit />
      </form>
    </div>
  );
}

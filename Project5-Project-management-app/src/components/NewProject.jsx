import React, {useRef} from 'react'
import Input from './Input'
import ErrorModal from './ErrorModal'

function NewProject({onAdd, onCancle}) {
    const title = useRef()
    const modalRef = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleSave (){
        const enteredTitle  = title.current.value
        const enteredDescription  = description.current.value
        const enteredDueDate = dueDate.current.value

        if(enteredTitle.trim() =='' || enteredDescription.trim()=='' || enteredDueDate.trim() == ''){
            modalRef.current.open()
            return
        }

        onAdd({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : enteredDueDate
        })
    }
  return (
    <>
    <ErrorModal ref={modalRef} buttonCaption="Okay">
    <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
    <p className='text-stone-600 mb-4'>Oops... looks like you forgor to enter a value.</p>
    <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for evry input field.</p>
    </ErrorModal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button className='text-stone-800 hover:text-stone-950' onClick={onCancle}>Cancle</button>
                </li>
            <li>
                <button className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md' onClick={handleSave}>Save</button>
                </li>
        </menu>
        <div>
            <Input ref={title} type="text" label="title" />
            <Input ref={description} label="Description" textarea />
            <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      
    </div>
    </>
  )
}

export default NewProject

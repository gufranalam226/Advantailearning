'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'


export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageInputRef = useRef('')
    function handleClick(){
        imageInputRef.current.click()
        
    }
    function handleChange(event){
        const file = event.target.files[0]
        if(!file){
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            setPickedImage(fileReader.result )
        }
        fileReader.readAsDataURL(file)
    }

  return (
    <div className={classes.picker}>
        <label htmlFor='image'>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && (
                    <Image src={pickedImage} alt='Image' fill />
                )}
            </div>
            <input className={classes.input} type='file' id= 'image' accept='image/png, image/jpeg'name={name} ref={imageInputRef} onChange={(e)=>handleChange(e)} required />
            <button onClick={handleClick} className={classes.button} type='button'>Pick an Image</button>
        </div>
      
    </div>
  )
}

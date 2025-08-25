
import { useState, useEffect } from 'react'
import MealCard from './MealCard'
import useHttp from '../hooks/useHttp.js'
import Error from './Error.jsx'

export default function Meals() {
  const {data : loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals', {}, [])    

  if(isLoading){
    return <p className='center'>Fetching...</p>
  }

  if(error){
    return <Error title='Failed to fetch meals' message={error} />
  }

 
  return (
    <ul id='meals'>
      {loadedMeals.map((meal)=>(
        <MealCard key={meal.id} meal={meal} />
      ))}
    </ul>
  )
}

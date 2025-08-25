import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import {currencyFormatter} from '../lib/formatting.js'
import Button from './UI/Button.jsx'

export default function MealCard({ meal}) {
    const cartState = useContext(CartContext)

    function addToCart(){
        cartState.addItem(meal)
    }
  return (
    <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <h3>{meal.name}</h3>
                <div>
                <div className='meal-item-price'> 
                    {currencyFormatter.format(meal.price)}
                </div>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className='meal-item-actions'>
                <Button className='' onClick={addToCart}>
                    Add to cart
                </Button>
            </p>    
        </article>
    </li>
  )
}

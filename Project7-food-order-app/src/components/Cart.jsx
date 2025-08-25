import React, { useContext } from 'react'
import CartModal from './CartModal'
import { CartContext } from '../contexts/CartContext'
import { currencyFormatter } from '../lib/formatting'
import Button from './UI/Button'
import UserProgressContext from '../contexts/UserProgressContext'


export default function Cart() {
    const cartState = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)


    const cartTotal = cartState.items.reduce((totalPrice, item)=> totalPrice + item.quantity*item.price ,0)

    function handleCloseCartModal (){
        userProgressCtx.hideCart()

    }

    function handleGoTOCheckout (){
        userProgressCtx.hideCart()

        userProgressCtx.showCheckout()

    }

  return (
    <CartModal className='cart' open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCartModal : null}>

        <h2>Your cart Items</h2>
        <ul>
            {cartState.items.map((item)=>{
                return (
                    <li key={item.id} className='cart-item'>
                        
                        <p>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
                        <p className='cart-item-actions'>
                            <button onClick={()=>cartState.removeItem(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>cartState.addItem(item)}>+</button>
                        </p>

                            
                    </li>
                )
            })}
        </ul>
        <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
        <p className='modal-actions'>
            <Button textOnly className='text-button' onClick={handleCloseCartModal}>Close</Button>
            {cartState.items.length >0 ?<Button onClick={handleGoTOCheckout} >Checkout</Button>: ''}
        </p>
      
    </CartModal>
  )
}

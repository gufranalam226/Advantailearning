import React, { useContext } from 'react'
import CartModal from './CartModal'
import { CartContext } from '../contexts/CartContext'
import { currencyFormatter } from '../utils/formatting'
import Button from './UI/Button'
import UserProgressContext from '../contexts/UserProgressContext'
import { cartActions, progressAction } from '../contexts/cartStore'
import { useSelector, useDispatch } from 'react-redux'

export default function Cart() {
    // const cartState = useContext(CartContext)
    const cart = useSelector(state => state.cart.items)
    const progress = useSelector(state => state.progress)
    const userProgressCtx = useContext(UserProgressContext)

    const dispatch = useDispatch()


    const cartTotal = cart.reduce((totalPrice, item)=> totalPrice + item.quantity*item.price ,0)

    function handleCloseCartModal (){
        // userProgressCtx.hideCart()
        dispatch(progressAction.hideCart())

    }

    function handleGoTOCheckout (){
        // userProgressCtx.hideCart()
        // userProgressCtx.showCheckout()
        dispatch(progressAction.hideCart())
        dispatch(progressAction.showCheckout())

    }

  return (
    <CartModal className='cart' open={progress.progress === 'cart'} onClose={progress.progress === 'cart' ? handleCloseCartModal : null}>

        <h2>Your cart Items</h2>
        <ul>
            {cart.map((item)=>{
                return (
                    <li key={item.id} className='cart-item'>
                        
                        <p>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
                        <p className='cart-item-actions'>
                            <button onClick={()=>dispatch(cartActions.removeItem(item))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>dispatch(cartActions.addItem(item))}>+</button>
                        </p>

                            
                    </li>
                )
            })}
        </ul>
        <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
        <p className='modal-actions'>
            <Button textOnly className='text-button' onClick={handleCloseCartModal}>Close</Button>
            {cart.length >0 ?<Button onClick={handleGoTOCheckout} >Checkout</Button>: ''}
        </p>
      
    </CartModal>
  )
}

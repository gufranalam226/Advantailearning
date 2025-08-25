
import React, { useContext } from 'react'
import CartModal from './CartModal'
import UserProgressContext from '../contexts/UserProgressContext'
import { currencyFormatter } from '../utils/formatting'
import Input from './UI/Input'
import Button from './UI/Button'
import { CartContext } from '../contexts/CartContext'
import useHttp from '../hooks/useHttp'
import Error from './Error'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, progressAction } from '../contexts/cartStore'



const requestConfig = {
    method : 'POST',  
    headers : {
        'Content-Type' : 'application/json'
    },
    
}

export default function Checkout() {
    // const cartState = useContext(CartContext)
    // const userProgressCtx = useContext(UserProgressContext)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items)
    const progress = useSelector(state => state.progress)

    const {data, isLoading: isSending, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig)

    const cartTotal = cart.reduce((totalPrice, item)=> totalPrice + item.quantity*item.price ,0)

    function handleCloseCartModal (){
        // userProgressCtx.hideCheckout()
        dispatch(progressAction.hideCheckout())
    }

    function handleFinish(){
        // userProgressCtx.hideCheckout()
        dispatch(cartActions.clearCart())
        dispatch(progressAction.hideCheckout())
        clearData()

    }

    async function handleSubmit(event){
        event.preventDefault()

        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())

        sendRequest(
            JSON.stringify({
            order : {
                items : cart,
                customer : customerData
            }
        }))
        
    }

    let actions = (<>
        <Button type="button" onClick={handleCloseCartModal} textOnly>Close</Button>
        <Button  >Submit Order</Button>
    
    </>)

    if(isSending){
        actions = <span> Sending order data</span>
    }


    if(data && !error){
        return (
        <CartModal open={progress.progress === 'checkout'} onClose={handleCloseCartModal}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>We will get back to you with more details via email within the next few minutes.</p>
            <p className='modal-actions'>
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </CartModal>
        )
    }
   
  return (
    <CartModal open={progress.progress === 'checkout'} onClose={handleCloseCartModal}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>

            <Input label='Full Name' type='text' id='name'/>
            <Input label='E-mail' type='email' id='email'/>
            <Input label='Address' type='text' id='street'/>
            <div className='control-row'>
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>

            {error && <Error title='Failed to place order' message={error} />}

            <p className='modal-actions'>{actions}</p>
        </form>
    </CartModal>
  )
}

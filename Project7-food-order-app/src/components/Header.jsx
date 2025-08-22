import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import { CartContext } from '../contexts/CartContext'
import CartModal from './CartModal'
import { useRef } from 'react'
import Button from './UI/Button'
import Cart from './Cart'
import UserProgressContext from '../contexts/UserProgressContext'

export default function Header(){
    const cartState = useContext(CartContext)
    const userProgressCtx= useContext(UserProgressContext)
    const totalCartItems = cartState.items.reduce((totalItems, item)=>{
        return totalItems + item.quantity
    }, 0)

    const modalRef = useRef(false)

    function handleShowCart(){
        userProgressCtx.showCart()
        console.log(userProgressCtx)
    }
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt="A restaurent" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}
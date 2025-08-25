import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import { CartContext } from '../contexts/CartContext'
import CartModal from './CartModal'
import { useRef } from 'react'
import Button from './UI/Button'
import Cart from './Cart'
import UserProgressContext from '../contexts/UserProgressContext'
import { useSelector, useDispatch } from 'react-redux'
import { progressAction } from '../contexts/cartStore'


export default function Header(){
    // const cartState = useContext(CartContext)
    const cart = useSelector(state => state.cart.items)
    const progress = useSelector(state => state.progress)
    const dispatch = useDispatch()
    const userProgressCtx= useContext(UserProgressContext)

    const totalCartItems = cart.reduce((totalItems, item)=>{
        return totalItems + item.quantity
    }, 0)

    const modalRef = useRef(false)

    function handleShowCart(){
        dispatch(progressAction.showCart())
    }
    console.log(progress)
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
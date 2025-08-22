import {createStore} from 'redux'
import {createSlice} from '@reduxjs/toolkit'


const cartInitialState = {}
const cartSlice = createSlice({
    name : 'cart',
    initialState : cartInitialState,
    reducers : {
        addItem(state, action){
            const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.item.id)
            const updatedItems = [...state.items]
            if(existingCartItemIndex > -1){
                const updatedItem = {
                    ...state.items[existingCartItemIndex],
                    quantity : state.items[existingCartItemIndex].quantity + 1
                }
                updatedItems[existingCartItemIndex] = updatedItem
            }else{
                updatedItems.push({...action.item, quantity : 1})
            }

        },
        removeItem(state, acton){},
        clearCart(){}

    }
})


export const cartAction = createSlice.action


const store = createStore(cartSlice.reducer)
export default store;
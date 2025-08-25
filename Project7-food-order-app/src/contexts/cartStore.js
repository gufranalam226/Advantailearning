import {createStore} from 'redux'
import {configureStore, createSlice} from '@reduxjs/toolkit'
import { progressSlice } from './userProgressSlice'

const cartInitialState = { items : [] }

const cartSlice = createSlice({
    name : 'cart',
    initialState : cartInitialState,
    reducers : {
        addItem(state, action){
            const existingCartItemIndex = state.items.findIndex((itm)=>itm.id === action.payload.id)
            if(existingCartItemIndex > -1){
                state.items[existingCartItemIndex].quantity += 1
                
            }else{
                state.items.push({...action.payload, quantity : 1})
            }
            

        },
        removeItem(state, action){
            const existingCartItemIndex = state.items.findIndex((itm)=>itm.id === action.payload.id)
            const cartItem = state.items[existingCartItemIndex]

            if(cartItem.quantity == 1){
                state.items.splice(existingCartItemIndex, 1)

            }
            else{
                state.items[existingCartItemIndex].quantity -= 1;
            }
        },
        clearCart(state){
            state.items = []
        }

    }
})


export const cartActions = cartSlice.actions
export const progressAction = progressSlice.actions


const store = configureStore({
    reducer : {
        cart : cartSlice.reducer,
        progress : progressSlice.reducer
    }})
export default store;
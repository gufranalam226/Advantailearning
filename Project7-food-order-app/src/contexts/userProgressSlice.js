import {configureStore, createReducer, createSlice} from '@reduxjs/toolkit'


const initialProgressData = {progress : ''}

export const progressSlice = createSlice({
    name : 'cartProgress',
    initialState : initialProgressData,
    reducers : {
        showCart(state){
            state.progress = 'cart'
            console.log("show cart")
        },
        hideCart(state){
            state.progress = ''
        },
        showCheckout(state){
            state.progress = 'checkout'
        },
        hideCheckout(state ){
            state.progress = ''
        },

    }
})




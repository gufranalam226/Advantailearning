
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter : 0, showCounter: true}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state, action){
            state.showCounter = !state.showCounter
        }
    }
})


const initialAuthState = {
    isAuthenticated : false
}

const authSlice = createSlice({
    name : 'auth',
    initialState: initialAuthState,
    reducers : {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

// const storeReducer = (state = initialState, action)=>{

//     if(action.type === 'INCREMENT'){
//         return (
//             {
//                 counter : state.counter +1,
//                 showCounter : state.showCounter
//             }
//         )
//     }

//     if(action.type === 'DECREMENT'){
//         return ({
//             counter : state.counter-1,
//             showCounter : state.showCounter
//         })
//     }
//     if(action.type === 'TOGGLE'){
//         return ({
//             showCounter : !state.showCounter,
//             counter : state.counter
//         })
//     }
//     return state
// }


const store = configureStore({
    reducer : {counter : counterSlice.reducer, auth : authSlice.reducer}
}) 

export const counterAction = counterSlice.actions
export const authAction = authSlice.actions
export default store
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addState: (state, action) => {
            state.cartState.push(action.payload)
        },
        removeState: (state, action) => {
            state.cartState = state.cartState.filter((item) => item.id !== action.payload)
        }
    },

})

export const {addState, removeState} = cartSlice.actions

export default cartSlice.reducer;
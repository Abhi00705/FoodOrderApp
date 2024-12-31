import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addState: (state, action) => {
            const id=action.payload.id
            const itemPresent = state.cartState.find(
              (cartItem) => id === cartItem.id);
            if(itemPresent){
            state.cartState.forEach(cI=>{
                if(cI.id===id){
                    cI.count++;
                }
            })
            }else{
                state.cartState.push({ ...action.payload, count: 1 });
            }
        },
        removeState: (state, action) => {
        
            // state.cartState = state.cartState.filter((item) => item.id !== action.payload)
            state.cartState.forEach(cartItem=>{
                if(cartItem.id===action.payload){
                   if(cartItem.count>1){
                    cartItem.count--;
                    
                   }else{
                    state.cartState = state.cartState.filter(
                      (item) => item.id !== action.payload
                    );
                    
                   }
                }
            })
        }
    },

})

export const {addState, removeState} = cartSlice.actions

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addState: (state, action) => {
           
            let id = action.payload.id;
            let isPresent = state.cartState.find((item)=>item.id === id);
            if(isPresent){

                state.cartState.forEach((item) => {
                    if(item.id === id){
                        item.count++;
                    }
                    
                })
            }
            else{
                state.cartState.push({...action.payload, count:1})
            }
                },
            
           
          
       
       
        removeState: (state, action) => {
            state.cartState.forEach((item) => {
                if(item.id === action.payload){
                    if(item.count > 1){
                        item.count--;
                    }
                    else{
                        state.cartState = state.cartState.filter((item) => item.id !== action.payload);
                    }
                }
            })
            // state.cartState = state.cartState.filter((item) => item?.id !== action.payload)
        }
    },

 
})

export const {addState, removeState} = cartSlice.actions

export default cartSlice.reducer;
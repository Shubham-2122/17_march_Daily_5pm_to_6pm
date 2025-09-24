import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        incrment : (state)=>{
            // state.value = state.value + 1 
            state.value += 1;
        },
        decrement : (state)=>{
            state.value -= 1;
        },
        zero : (state)=>{
            state.value = 0;
        }
    }
})

export const {incrment,decrement,zero} = counterSlice.actions;

export default counterSlice.reducer;
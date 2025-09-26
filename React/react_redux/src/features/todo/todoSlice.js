import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : [
        "vivek",
        "shubham"
    ]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers : {
        addtodo:(state,action)=>{
            state.todo.push(action.payload);
        },
        deleteTodo:(state,action)=>{
          state.todo = state.todo.filter((data,index)=> index !== action.payload)  
        },
        updeteTodo:(state,action)=>{
            
        }
    }
})

export const {addtodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read
export const showuser = createAsyncThunk(
    "showuser",async(argu,{rejectWithValue})=>{
        try {
            const res =await axios.get("http://localhost:3000/user")
            const resp = await res.data;
            return resp;
        } catch (error) {
            return  rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        loading : false,
        users : [],
        error : ""
    },
    reducers:{
        userpending:(state,action)=>{
            state.loading = true;
        },
        userFullfiled:(state,action)=>{
            state.loading = false;
            state.users.push(action.payload)
        },
        userRejected:(state,action)=>{
            state.loading = false;
            state.error = "api data not found"
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(showuser.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(showuser.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(showuser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {userpending,userFullfiled,userRejected} = userSlice.actions;

export default userSlice.reducer;
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

// create 
export const createuser = createAsyncThunk(
    "createuser",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/user",data);
            const resp =  await res.data;
            return resp;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// delete 
export const deleteuser =createAsyncThunk(
    "deleteuser",async(id,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/user/${id}`)
            const resp = await res.data;
            return resp;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// update user
export const updateuser = createAsyncThunk(
    "updateuser",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.put(`http://localhost:3000/user/${data.id}`,data)
            const resp = await res.data
            return resp;
        } catch (error) {
            return rejectWithValue(error)
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
        // crete
        .addCase(createuser.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(createuser.fulfilled,(state,action)=>{
            state.loading = false;
            state.users.push(action.payload)
        })
        .addCase(createuser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // delete
         .addCase(deleteuser.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(deleteuser.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = state.users.filter((data,index)=> index !== action.payload)
        })
        .addCase(deleteuser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // update
          .addCase(updateuser.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(updateuser.fulfilled,(state,action)=>{
            state.loading = false;

            state.users = state.users.map((ele)=>{
                // (ele.id action.pay) ? true : ele
                ele.id = action.payload.id ? action.payload : ele
            })
        })
        .addCase(updateuser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {userpending,userFullfiled,userRejected} = userSlice.actions;

export default userSlice.reducer;
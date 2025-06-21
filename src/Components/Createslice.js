import React from 'react'
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    username:"",
    email:"",
    password:"",

}
const userslice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setuser:(state,action)=>{
            state.username=action.payload.username
            state.email=action.payload.email
            state.password=action.payload.password
        }
    }
})
export const {setuser}=userslice.actions
export default userslice.reducer
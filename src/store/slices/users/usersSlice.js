import { createSlice } from "@reduxjs/toolkit"
import { fetchUsers } from "./usersAPI"

const usersSlice=createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        currentUser: null
    },
    reducers: {
        toggleCurrentUser(state, {payload}){
            const initialUser=state.usersData.find(user=>(user.username===payload.login||user.email===payload.login)&&user.password===payload.password)
            state.currentUser=initialUser||null
        },
        logOut(state){
            state.currentUser=null
        },
        addPost(state, {payload}){
            const idx=state.usersData.findIndex(user=>user.id===state.currentUser.id)
            state.usersData[idx].images.unshift({
                ...payload
            })
            state.currentUser.images.unshift({
                ...payload
            })
        },
        delPost(state, {payload}){
            const idxUser=state.usersData.findIndex(user=>user.id===state.currentUser.id)
            const idxIMG=state.currentUser.images.findIndex(img=>img.id===payload)
            state.currentUser.images.splice(idxIMG, 1)
            state.usersData[idxUser].images.splice(idxIMG, 1)

        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload})=>{
            return {
                ...state,
                usersData: [...payload]
            }
        }
    }

})
export const selectUsers=state=>state.users
export const {toggleCurrentUser, logOut, addPost, delPost} =usersSlice.actions
export const usersReducer=usersSlice.reducer
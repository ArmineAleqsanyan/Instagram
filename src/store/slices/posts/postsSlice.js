import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addComment(state, {payload}){
            const idx = state.findIndex(post => post.id === payload.id)
            state[idx].comments.push({
                id: new Date().getTime().toString(),
                username: payload.username,
                body: payload.body 
            })
        },
        addPost(state, {payload}){
            state.unshift({...payload})
        },
        delPost(state, {payload}){

            const idx=state.findIndex(post=>post.id===payload)
            state.splice(idx, 1)
        }
    },
    extraReducers: {
        [fetchPosts.pending]: () => {
            console.log('loading...');
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return [
                ...payload,
            ]
        }
    },
        
})

export const selectPosts = state => state.posts

export const { addComment, addPost, delPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer  
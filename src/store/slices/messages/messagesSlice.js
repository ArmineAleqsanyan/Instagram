import { createSlice } from "@reduxjs/toolkit";

const messagesSlice=createSlice({
    name: 'messages',
    initialState: {
        currentDialog: [],
        activeUserId: '',
        allMessages: [],
    },
    reducers: {
        addNewMessage(state, {payload:{fromID,txt}}){
            const currentMessage={
                fromID, txt,
                toID: state.activeUserId,
                id: new Date().getTime().toString(),

            }
            state.allMessages.push({...currentMessage})
            state.currentDialog.push({...currentMessage})    
        },
        toggleActiveUser(state, {payload:{id,fromId}}){
            state.activeUserId=id
            state.currentDialog=[
                ...state.allMessages.filter(mess=>(mess.toID===id&&mess.fromID===fromId)||
                                                  (mess.toID===fromId&&mess.fromID===id))
            ]
        },
        reset(state){
            state.activeUserId=" "
            state.currentDialog=[]
        }
    
    },
    extraReducers:{},
})
export const selectMessages=state=>state.messages
export const { toggleActiveUser, addNewMessage, reset} =messagesSlice.actions
export const messagesReducer=messagesSlice.reducer

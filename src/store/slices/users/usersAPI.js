import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers=createAsyncThunk(
    'users/fetchUsers',
    async function(){
        const {data:usersData}=await axios.get('https://jsonplaceholder.typicode.com/users')
        const {data:dataPosts}=await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
        const data=usersData.map(user=>({
            id:user.id.toString(),
            name:user.name,
            username:user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            bio:user.company.catchPhrase,
            followers: Math.round(Math.random()*200+300),
            following: Math.round(Math.random()*200+300),
            images: [
                ...dataPosts.filter(post=>post.albumId===user.id)
                .map(post=>({
                    id: post.id.toString()+Math.random(),
                    img: post.url,
                    name: user.username.toLowerCase(),
                    postText: post.title.slice(post.title.indexOf(' ') + 1),
                    timeAgo: Math.round(Math.random() * 8 + 2 ) + ' Minutes Ago',
                    likesCount: Math.round(Math.random() * 300 + 200),
                    comments: [ ]
                }))
            ]
        }))
        return data
    }
)
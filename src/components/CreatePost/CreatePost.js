import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addPost as addPost_users,  selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
import { addPost as addPost_posts } from '../../store/slices/posts/postsSlice';

const CreatePost = () => {
    const {currentUser}=useSelector(selectUsers)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
        if (!currentUser) {
            navigate('/login')
            
        }
    },[currentUser])

    const formRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {img: {value:img}, desc: {value:postText}}=formRef.current
        const initialPost={
            id:new Date().getTime().toString(),
            name: currentUser.username,
            timeAgo: Math.round(Math.random() * 8 + 2 ) + ' Minutes Ago',
            likesCount: Math.round(Math.random() * 300 + 200),
            comments: [],
            img, postText
        }
        dispatch(addPost_posts(initialPost))
        dispatch(addPost_users(initialPost))
        navigate('/')

        formRef.current.reset()
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            {/* <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />    */}
            <br/>
            <form style={{marginTop: '50px'}} ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="img" name="img"/>
                    <input type="text" placeholder="desc" name="desc"/>
                    <label className="input-file">
                    <input type="submit" name="file" style={{display:'none'}}/>		
                    <span>Add post</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { delPost as delPost_posts } from '../../store/slices/posts/postsSlice';
import { delPost as delPost_users, selectUsers } from '../../store/slices/users/usersSlice';

import './Profile.css'
const Profile = () => {
    const {currentUser}=useSelector(selectUsers)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        if (!currentUser) {
            navigate('/login')
            
        }
    },[currentUser])


    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src='https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png' alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{currentUser?.username}</h1>
                        <button class="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{currentUser?.images.length}</span> posts</li>
                            <li><span className="profile-stat-count">{currentUser?.followers}</span> followers</li>
                            <li><span className="profile-stat-count">{currentUser?.following}</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <h3>{currentUser?.name}</h3>
                        <p>{currentUser?.bio}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
        {
            currentUser?.images.map(el => (
                <div key={el.id} className="gallery-item">
                    <img src={el.img} className="gallery-image" alt=""/>
                    <div className="gallery-item-info">
                        <ul>
                            <span onClick={()=>{
                                dispatch(delPost_posts(el.id))
                                dispatch(delPost_users(el.id))
                            }} className='del-item'>X</span>
                            <li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
                            <li className="gallery-item-comments"><span >Comments</span> {el.comments.length}</li>
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    
        </>
    );
}

export default Profile;

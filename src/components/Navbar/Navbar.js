import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import IMAGES from '../../images'
import { selectSearch, toggleSearch } from '../../store/slices/search/searchSlice'

function Navbar() {
  const dispatch = useDispatch()
  const search = useSelector(selectSearch)
  const {pathname} = useLocation()
  // console.log({pathname});
 
  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>  
           {pathname=== '/' && <input type="text" className="search-box1" placeholder="Search" value={search} onChange={(e) => dispatch(toggleSearch(e.target.value))} />}
            <div className="nav-items">
                {/* <NavLink to='/login' className={'login'}>Login</NavLink> */}
                <NavLink to='/'><img src={IMAGES.home} className="icon" alt=""/> </NavLink>
                <NavLink to='/messenger'><img src={IMAGES.messenger} className="icon" alt=""/> </NavLink>
                <NavLink to='/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <NavLink to='/explore'><img src={IMAGES.explore} className="icon" alt=""/></NavLink>
                <NavLink to='/notification'><img src={IMAGES.like} className="icon" alt=""/></NavLink>
                <NavLink to='/profile'><img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} className="icon user-profile" alt='' /></NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
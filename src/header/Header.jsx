import React from 'react'
import './header.css'
import SearchBar from './searchBar/SearchBar'
import Profile from './profile/Profile'

function Header() {
  return (
    <div className='header'>
      <h1 className='title'>SocialBoat</h1>
     <div><SearchBar /></div> 
      <Profile />
    </div>
  )
}

export default Header
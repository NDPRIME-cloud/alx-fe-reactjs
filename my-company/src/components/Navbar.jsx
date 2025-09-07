import React from 'react'
import{ Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display:'flex',padding:'10px', gap:'20px', background:'#f0f0f0'}}>
        <Link to='/'>Home</Link>
        
        <Link to='/services'>Services</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        
    
    


        </nav>
  )
}

export default Navbar
import React from 'react'
import{ Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display:'flex',padding:'10px', gap:'20px', backgroundColor:'#f0f0f0', justifyContent:'start'}}>
        <Link to='/'>Home</Link>
        
        <Link to='/services'>Services</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        
    
    


        </nav>
  )
}

export default Navbar
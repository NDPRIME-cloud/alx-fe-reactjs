import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <p>sorry, looks like this page doesn't exist</p>
       <Link to='/'  style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}> Back to Home</Link>
    </div>
  )
}

export default NotFound

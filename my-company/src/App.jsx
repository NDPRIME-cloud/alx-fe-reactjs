import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Footer from './pages/Footer'
import NotFound from './pages/NotFound'






function App() {

  return(
    <Router>
      <Navbar/>
      <div style={{padding:'20px'}}> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          <Route path='*' element={<NotFound/>}/>
          

        </Routes>
      </div>
      <Footer/>
    </Router>
   
  )
}
 

export default App

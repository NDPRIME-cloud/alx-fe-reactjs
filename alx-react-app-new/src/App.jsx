import { useState } from 'react'

import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const increase = () =>{
          setCount((prev) => prev + 1)
        }
const decrease = ()=>{
  setCount((prev)=> prev - 1)
}
const [toggle , setToggle] = useState(false)
  return (
   <>
   <button onClick={() =>setToggle((!toggle))} > meow</button>
   {toggle &&<h3>show me </h3>}
   <h1>Counts {count}</h1>
   <button onClick={increase}>
    add
   </button>
   <button onClick={decrease}>
    minus
   </button>
     
     <WelcomeMessage />
     <Header />
     <MainContent />
     
     <UserProfile name="Alice" age= "25" bio= "Loves hiking and photography" />
     <Footer />
     <Counter/>
    
    </>
  )
}

export default App

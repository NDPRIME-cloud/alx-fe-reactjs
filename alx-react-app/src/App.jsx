import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)
  const increase = () =>{
          setCount((prev) => prev + 1)
        }
const decrease = ()=>{
  setCount((prev)=> prev - 1)
}
const reset = ()=>{
  setCount(()=> 0)
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
   <button onClick={reset}>Reset</button>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <WelcomeMessage />
     <Header />
     <MainContent />
     <Footer />
     <UserProfile name="Alice" age= "25" bio= "Loves hiking and photography" />
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

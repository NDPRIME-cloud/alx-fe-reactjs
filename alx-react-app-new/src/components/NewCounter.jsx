import Usestore from "../stores/Usestore";
import React from 'react'

function NewCounter (){
    const {count, increase, decrease, reset} = Usestore()
   
    return (
        <div>
           
            <h1>{count} carts are here</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease} disabled={count=== 0}>-</button>
            <button onClick={reset}>Reset</button>






        </div>
    )
}

export default NewCounter
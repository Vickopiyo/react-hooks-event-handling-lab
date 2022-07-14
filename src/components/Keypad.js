// Code Keypad Component Here
import React from 'react'

const Keypad = () => {
    const onchange = ()=>{
        console.log("Entering password...")
    }
  return (
    <div>
        <input  type="password" onChange={onchange}/>

    </div>
  )
}

export default Keypad

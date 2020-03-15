import React from 'react'

const person = (props) => {
    return(
    <div>
      <p>{Math.floor(Math.random())} I'm {props.name} and I am {props.age} years old</p>
    <p>{props.children}</p>
    </div>
    
    ) 
    
}

export default person
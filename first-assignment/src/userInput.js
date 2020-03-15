import React from 'react'

const UserInput = (props) => {
    const style = {
        color: '#4c4a37',
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '18px',
        lineHeight: '32px', 
        margin: '0 0 24px',
        padding: '18px',
    }
    
    return (
        <div style={style}>
            <br />
            <label for='pass1'>Username: </label>
            <input type='text' name='pass1' onChange={props.changed} value={props.name}/>
        </div>        
    )
}

export default UserInput
import React from 'react'
import './Output.css'

const UserOutput = (props) => {
    return (
        <div className='Output'>
            <p>This is <a href='https://mussumipsum.com/'>{props.username}</a> Loren</p>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est. Detraxit consequat et quo num tendi nada. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. </p>
        </div>        
    )
}

export default UserOutput
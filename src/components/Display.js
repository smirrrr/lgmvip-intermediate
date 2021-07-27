

import React from 'react'
import './styles.css'

function Display(props) {
    return (
     
          
        <div className='cardsarea'>
           
            
            <div className='pics'><li className='eachli'><img src={props.avatar}/><div className='writing'>{props.firstname} {props.lastname}<br></br>{props.email}</div></li></div>
           
      
        </div>
      
    )
}

export default Display

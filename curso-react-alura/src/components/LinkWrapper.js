import React from 'react';
import {NavLink} from 'react-router-dom'

const LinkWrapper = props => {

    return (
       <NavLink activeStyle={{fontWeight:"bold", fontSize:"20px",color:"black"}} {...props}/>
    )
}


export default LinkWrapper;
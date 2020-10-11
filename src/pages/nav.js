 import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
// import {UserContext} from '../context/UserContext'


export default () => {

    // const {user} = useContext(UserContext) 

    return (
      <nav>
      <div className="nav-wrapper">
     
         {/* <a href="#" style={{paddingLeft: 10}} className="brand-logo">Logo</a> */}
         <NavLink style={{paddingLeft: 10}} className="brand-logo hide-on-small-only" to="/" exact> Logo </NavLink>
      
        <ul id="nav-mobile" className="right">
          <li><NavLink to="/" exact> Home </NavLink></li>
          <li><NavLink to="/protected" exact> Page protégée </NavLink></li>
          <li> <NavLink to="/login" exact> Login </NavLink></li>
          <li> <NavLink to="/logout" exact> Logout </NavLink></li>
        </ul>
      </div>
      </nav>


      
        
    )
} 




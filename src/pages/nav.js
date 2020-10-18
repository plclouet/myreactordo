 import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from "../images/logo1.jpg"

export default () => {

    // const {user} = useContext(UserContext) 

    return (
      <nav>
      <div className="nav-wrapper">
     
         {/* <a href="#" style={{paddingLeft: 10}} className="brand-logo">Logo</a> */}
         <NavLink style={{paddingLeft: 10, paddingTop: 8 }} className="brand-logo hide-on-med-and-down" to="/" exact>
          
            <img src={Logo} width="80" height="40" alt="radiologie"/> 
          </NavLink>
      
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




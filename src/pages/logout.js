
import React, {useState, useContext } from 'react'
import {UserContext} from '../context/UserContext'




 const Logout = ({history}) => {

    const [text, setText] = useState('')
    
    const {user, setUser} = useContext(UserContext)

 const  logoutClear = () => {
            setUser(null);
            localStorage.removeItem('jwt');
            localStorage.removeItem('username');
            setText('vous êtes déconnecté; vous allez être redirigé vers la page principale...');
            setTimeout(() => history.push('/'), 3000); // Redirect to homepage after 3 sec
      }


     
             return (
      
            
            <div className="container">
            

             <div className="row"> 
               

                
                 <h2>Logout</h2>
                
               
                 <button className="btn btn-primary" onClick={logoutClear}>Logout</button>
          
           
             </div>  {/*  fin row */}  
             
            <p>{text}</p>
          
            </div>  
           
    
            )
      
 

}


export default Logout;
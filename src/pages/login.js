import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from '../context/UserContext'

export default ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [text, setText] = useState('Loading...')
    //const {user, setUser} = useContext(UserContext)
    const { loginUser, user } = useContext(UserContext);
   
    console.log("user", user)
    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        if(jwt){
            history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await fetch('https://frozen-dawn-43758.herokuapp.com/auth/local/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: email,
                    password
                })
            })

            const data = await response.json()
            console.log("data", data)

            if(data.message){
                 
                setError(data.message[0].messages[0].message)
               
                return //Stop execution
            }

            loginUser(data.user.username);
            localStorage.setItem('jwt', data.jwt);
            localStorage.setItem('username', data.user.username);
           
            setText('You have been successfully logged in. You will be redirected in a few seconds...');
            setTimeout(() => history.push('/protected'), 3000); // Redirect to homepage after 3 sec

        } catch(err){
            console.log(err)
            setError('Something went wrong ' + err)
        }
        
    } 

    return (
      
            
            <div className="container">
            

             <div className="row"> 
               

                
                 <h2>Login</h2>
                 <h5>Vous devez vous connecter pour accéder aux pages protégées</h5>
               
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                 <div className="col m8 s12 ">
                <div className="input-field">
                    <input 
                        className="validate"
                        type="email"
                        value={email}
                        onChange={(event) => {
                            setError('')
                            setEmail(event.target.value)
                        }}
                    />
                     <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input 
                        className="validate"
                        type="password"
                        value={password}
                        onChange={(event) => {
                            setError('')
                            setPassword(event.target.value)
                        }}
                    />
                    <label htmlFor="password">Password</label>
                </div>
               
                <button>Login</button>
                </div>
                </div>
            </form>
           
             </div>  {/*  fin row */}  

             {error && <p>{error}</p>}
            <p>{text}</p>
            </div> 
           
    
    )

}

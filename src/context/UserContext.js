import React, {createContext, useState} from 'react'

// export const UserContext = createContext(null)

// export default ({children}) => {

//     const [user, setUser] = useState(null)

//     return (
//         <UserContext.Provider value={{user, setUser}}>
//             {children}
//         </UserContext.Provider>
//     )
// }


export const UserContext = createContext({ name: '', auth: false });
// This also works: const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ name: '', auth: false });
  
    // Login updates the user data with a name parameter
    const loginUser = (name) => {
      setUser((user) => ({
        name: name,
        auth: true,
      }));
     // localStorage.setItem('jwt', data.jwt);
        //localStorage.setItem('username', data.user.username);
    };
  
    // Logout updates the user data to default
    const logoutUser = () => {
      setUser((user) => ({
        name: '',
        auth: false,
      }));
      //localStorage.removeItem('jwt');
     // localStorage.removeItem('username');
    };
  
    return (
      <UserContext.Provider value={{ user, loginUser, logoutUser }}>
        {children}
      </UserContext.Provider>
    );
  }
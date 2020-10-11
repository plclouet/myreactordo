import React from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


class ProtectedRoute extends React.Component {
    
    render() {
        const Component = this.props.component;
        
        const isAuthenticated = localStorage.getItem('jwt');
       
        return isAuthenticated ? (
            <Component />
        ) : (
          
             <Redirect to={{ pathname: '/login' }}/>
        );
    }
}

export default ProtectedRoute;
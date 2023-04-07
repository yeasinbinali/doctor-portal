import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    
    if(user && user.uid){
        return children;
    }else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;
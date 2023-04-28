import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router';
import { AuthContext } from '../../contexts/UserContext';

const DisplayError = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
          .then(() => {
              navigate('/login')
          })
          .catch(err => console.log(err))
    };

    return (
        <div className='text-center'>
            <h2 className='text-red-700 text-4xl'>Oops! Something went wrong!!!</h2>
            <h2 className='text-red-600 text-4xl'>{error.statusText || error.message}</h2>
            <p>Please <button onClick={handleLogout} className="btn btn-outline border-0">Logout</button> and back in.</p>
        </div>
    );
};

export default DisplayError;
import React, { useState } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UseContext';

const PrivateRoute = ({children}) => {
    
    const {logedUser, loading} = useContext(AuthContext)

    if(loading){
        return (
            <div className='flex justify-center m-10 p-10'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
            </div>
        )
    }

    if(logedUser){
        return children;
    }
    else{
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoute;
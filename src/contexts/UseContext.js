import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Hooks/firebase-config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()


const auth = getAuth(app);

const UseContext = ({children}) => {

    const [logedUser, setLogedUser] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setLogedUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const createUserWithEmail = (email, password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUserWithEmail = (email, password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {createUserWithEmail, logedUser, setLogedUser, loginUserWithEmail, loading, setLoading  }





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;
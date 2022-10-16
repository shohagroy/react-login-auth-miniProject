import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UseContext';


const SignUp = () => {
    const { createUserWithEmail, logedUser,  setLogedUser } = useContext(AuthContext)

    // console.log(createUserWithEmail);

    const regestionHandelar = (e)=>{
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmail(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            setLogedUser(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error)
          });
          <Navigate to='/'></Navigate>


       
    }



    return (
        <div className='bg-gray-400 h-screen flex justify-center items-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={regestionHandelar} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-400">Name</label>
                        <input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-black bg-gray-200 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Your assword" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-black focus:border-violet-400" />
                        
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Registration</button>
                </form>
                
                
                <p className="text-xs text-center sm:px-6 text-gray-400">I have already an account?
                    <Link to='../login' rel="noopener noreferrer" className="underline text-gray-100">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
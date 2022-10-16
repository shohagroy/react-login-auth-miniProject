import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UseContext';
import Logo from '../assets/progile.jpg'
import { useState } from 'react';

const Home = () => {

    const [profile, setProfile] = useState(false)

   const {logedUser,  setLogedUser} = useContext(AuthContext);

    console.log(logedUser.displayName);

   const logOutHandaler = ()=>{
    console.log('sign out button clik');
   }



    return (
        <div className='bg-gray-300'>
            <div className='max-w-[1200px] px-5 p-2 mx-auto flex justify-between items-center'>
                <div>
                    <p>Wellcome {logedUser.displayName} Please your email verify Fast! </p>
                </div>

                <div className='relative'>

                    {
                        logedUser.photoURL ? <button onClick={()=> setProfile(!profile)}><img className='rounded-full w-20 border-2 border-white ' src={logedUser.photoURL} alt="Profile" /></button> :
                        <button onClick={()=> setProfile(!profile)}><img className='rounded-full w-20 border-2 border-white ' src={Logo} alt="Profile" /></button>
                    }
                    
                    
                    <div className={`${profile ? 'absolute' : 'hidden'} right-[-100px] p-5 top-[80px] w-[200px] rounded-2xl  bg-gray-300`}>
                        <div className='flex justify-center items-center flex-col'>
                            <button className='p-2 w-full rounded-full bg-gray-900 text-white font-bold'>Update Profile</button>
                            <button onClick={logOutHandaler} className='p-2 w-full m-2 rounded-full bg-gray-900 text-white font-bold'>Log Out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
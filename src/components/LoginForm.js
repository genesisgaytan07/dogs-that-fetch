import React, { useState, useEffect } from 'react';

export default function LoginForm(){
   
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
        
    
 
    return(
        <div className='px-10 py-10 bg-white rounded-3xl' >
            
            <p className='text-purple-950'>Enter your login information.</p>
            <h1 className='mb-8 text-6xl font-semibold text-purple-950'>Welcome</h1>
            <div>
                
                <input
                    className='w-full px-2 py-1 mb-2 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    placeholder= 'Email address'
                    type='email'
                    onChange={(e)=>setEmail(e.target.vaule)}
                />
            </div>
            
            <div>
                
                <input
                    className='w-full px-2 py-1 mb-2 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    placeholder= 'Password'
                    type = 'password'
                    onChange={(e)=>setPassword(e.target.vaule)}
                />
            </div>

            
           
            <div className="flex items-center justify-center">
                <button className='active:scale-[.98] text-blue-700 text-sm hover:underline'>Forgot Password?</button>
            </div>
            
            <div className="flex flex-col justify-center mt-2 gap-y-4">
                <button className=" active:scale-[.98] text-white font-bold bg-yellow-400 hover:bg-yellow-500 rounded-full ">Login</button>
            </div>

            <div className="flex items-center justify-center mt-2 space-x-2 text-sm">
                <p>Don't have an account?</p>
                <button className="active:scale-[.98] text-blue-700 hover:underline">Sign up</button>
            </div>
       
        </div>
    )
}

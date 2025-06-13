import * as React from 'react';

export default function LoginForm(){
    return(

        <div className='bg-white rounded-3xl px-10 py-10' >
            
            <p className='text-purple-950'>Enter your login information.</p>
            <h1 className=' text-6xl font-semibold mb-8 text-purple-950'>Welcome</h1>
            <div>
                
                <input
                    className='w-full  mb-2 px-2 py-1 rounded-xl border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    placeholder= 'Email address'
                    type='email'
                />
            </div>
            
            <div>
                
                <input
                    className='w-full mb-2 px-2 py-1 rounded-xl border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    placeholder= 'Password'
                    type = 'password'
                />
            </div>

            
           
            <div className="flex justify-center items-center">
                <button className='active:scale-[.98] text-blue-700 text-sm hover:underline'>Forgot Password?</button>
            </div>
            
            <div className="flex justify-center mt-2 flex-col gap-y-4">
                <button className=" active:scale-[.98] text-white font-bold bg-yellow-400 hover:bg-yellow-500 rounded-full ">Login</button>
            </div>

            <div className="flex justify-center mt-2 items-center text-sm space-x-2">
                <p>Don't have an account?</p>
                <button className="active:scale-[.98] text-blue-700 hover:underline">Sign up</button>
            </div>
       
        </div>
    )
}

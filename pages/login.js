import Link from 'next/link'
import React from 'react'
import {auth,signInWithEmailAndPassword} from "../src/Firebase/firebase.config"
import { useState } from 'react';

export default function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password)
            
        } catch (error) {
            alert("error occurred try again!")
        }

    }
    return (
        <div>
            <header className="bg-gray-100 shadow-2xl p-4">
                <h1 className="text-2xl font-extrabold">DevOnly</h1>
            </header>
            <main className='grid sm:grid-cols-2 py-12'>
            <div className='p-16 space-y-2'>
                <h2 className='text-4xl font-medium'>DevOnly</h2>
                <p className='text-xl'>Read, write blogs from your faviorte authors</p>
            </div>
            <div>
                <form className='sm:w-3/4 mx-auto bg-gray-200 shadow-2xl rounded-2xl space-y-3 px-8 py-8'>
                    <h3 className='text-center text-2xl font-medium'>Login</h3>
                    <div className='flex flex-col w-5/6'>
                        <label className='py-1'>Email</label>
                        <input className='p-3 rounded-md' type="email" placeholder='' required onChange={(e)=>setEmail(e.target.value.trim())} />
                    </div>
                    <div className='flex flex-col w-5/6'>
                        <label className='py-1'>Password</label>
                        <input className='p-3 rounded-md' type="password" placeholder='' required onChange={(e)=>setPassword(e.target.value.trim())} />
                    </div>
                    <button type="submit" className="bg-cyan-500 text-white font-medium rounded-md shadow-xl px-6 py-3" onClick={handleLogin}>Login</button>
                    <div className='flex space-x-2'>
                        <p>Not a registered user ? </p>
                        <Link href="/signup"><a className="underline">signup</a></Link>
                    </div>
                </form>
            </div>
        </main>
        </div>
    )
}

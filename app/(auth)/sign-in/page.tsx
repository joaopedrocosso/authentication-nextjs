import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const SignIn = () => {
  return (
    <div className='mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border-[#121212] dark:bg-black'>
   
        <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>Login Page</h2>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>Welcome back!</p>
        
        <form action="" className='my-8'>
            <div className='flex flex-col gap-2 mb-4'>
                <Label htmlFor='email' className=''>E-mail Address</Label>
                <Input id='email' placeholder='example@email.com' type='email' name='email' />
            </div>

            <div className='flex flex-col gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' placeholder='********' type='password' name='password' />
            </div>

            <button className='mt-4 py-2 bg-black text-white w-full rounded-md font-medium'>
                Sign In &rarr;
            </button>

            <p className='text-neutral-600 text-sm max-w-sm mt-2'>Don't have an account? <Link href="/sign-up">Register</Link></p>

            <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full'/>

            <section className='flex flex-row items-center justify-between px-8'>
                <form action="">
                    <button className='flex flex-row gap-2 items-center' type='submit'>
                        <FaGithub />
                        <span>Github</span>
                    </button>
                </form>

                <form action="">
                    <button className='flex flex-row gap-2 items-center' type='submit'>
                        <FaGoogle />
                        <span>Google</span>
                    </button>
                </form>
            </section>
        </form>
    </div>
  )
}

export default SignIn
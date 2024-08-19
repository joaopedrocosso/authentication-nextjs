import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const SignUp = async () => {
  return (
    <div className='mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border-[#121212] dark:bg-black'>
        <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>Registration Page</h2>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>Provide all the necessary information</p>

        <form action="" className='my-8'>
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='firstname'>First Name</Label>
                    <Input id='firstname' placeholder='First Name' type='text' name='firstname' />
                </div>
            
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='lastname'>Last Name</Label>
                    <Input id='firstname' placeholder='Last Name' type='text' name='firstname' />
                </div>
            </div>

            <div className='flex flex-col gap-2 mb-4'>
                <Label htmlFor='email' className=''>E-mail Address</Label>
                <Input id='email' placeholder='example@email.com' type='email' name='email' />
            </div>

            <div className='flex flex-col gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' placeholder='********' type='password' name='password' />
            </div>

            <button className='mt-4 py-2 bg-black text-white w-full rounded-md font-medium'>
                Sign up &rarr;
            </button>

            <p className='text-neutral-600 text-sm max-w-sm mt-2'>Already have an account? <Link href="/sign-in">Login</Link></p>
        </form>
    </div>
  )
}

export default SignUp
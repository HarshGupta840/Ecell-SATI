'use client'
import React, { useState, ChangeEvent, useEffect } from 'react'
import logo from '@/app/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

interface Input {
  email: string
  password: string
}
const Admin = () => {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState<Input>({
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValue((prev: Input) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    console.log('called')
    const result = await signIn('credentials', {
      email: inputValue.email,
      password: inputValue.password,
      redirect: true,
      callbackUrl: '/admin/event',
    })
    if (result?.error == 'CredentialsSignin') {
      setLoading(false)
      console.error('Incorrect credentials provided.')
      window.alert('Incorrect credentials provided. Please try again.')
    }
  }
  useEffect(() => {
    const error = searchParams.get('error')
    if (error === 'CredentialsSignin') {
      window.alert('worng credentials')
    }
  }, [])
  return (
    <div className="flex flex-col  justify-center items-center w-full h-[100vh]">
      <Image
        src={logo}
        alt="logo"
        width={250}
        className="w-[470px] h-[400px]"
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={inputValue.email}
        autoComplete="off"
        onChange={handleChange}
        className="border-2 border-main py-1 px-4 w-[600px] h-[60px] rounded-full bg-transparent text-white mt-2 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Password"
        name="password"
        autoComplete="off"
        value={inputValue.password}
        onChange={handleChange}
        className="border-2 border-pink py-1 px-4 w-[600px] h-[60px] rounded-full bg-transparent mt-5 text-white focus:outline-none"
      />
      <button
        onClick={handleLogin}
        className="bg-gradient-to-r from-pink to-main w-[200px] h-[45px] text-black font-extrabold py-1 px-8 mt-6 rounded-ss-xl rounded-ee-xl cursor-pointer "
      >
        Login
      </button>
      <Link href={'#'} className="underline text-white mt-6 text-sm">
        Forgot Password?
      </Link>
    </div>
  )
}

export default Admin

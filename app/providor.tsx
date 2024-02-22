'use client'
import { useEffect, useState } from 'react'
import './globals.css'
import store from '@/redux/store'
import { Provider } from 'react-redux'
import Preloader from './components/preloader'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface Props {
  children: React.ReactNode
  session?: Session | null
}

export function Providers({ children, session }: Props) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') return setShowLoader(false)
    window.addEventListener('load', () => {
      setShowLoader(false)
    })
  }, [])

  return (
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          {showLoader ? <Preloader /> : children}
          {/* <Preloader /> */}
        </SessionProvider>
      </Provider>
    </>
  )
}

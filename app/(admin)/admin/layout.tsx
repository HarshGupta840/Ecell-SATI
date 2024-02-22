'use client'
import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import { usePathname } from 'next/navigation'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import Modalmanager from '@/app/components/modals'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  weight: '400',
  subsets: ['cyrillic'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider store={store}>
          {pathname === '/admin' ? (
            <section>{children}</section>
          ) : (
            <section className="flex">
              <Sidebar />
              <section className="w-10/12 py-5 ">{children}</section>
            </section>
          )}
          <Modalmanager />
        </Provider>
      </body>
    </html>
  )
}

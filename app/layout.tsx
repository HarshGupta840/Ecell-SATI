import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Providers } from './providor'
import Toastcontainers from './toast'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  weight: ['900', '100', '300', '400', '500', '600', '700', '800', '200'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'E-cell',
  description: 'Generated by developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <section>
            {children}
            <Toastcontainers />
          </section>
        </Providers>
      </body>
    </html>
  )
}

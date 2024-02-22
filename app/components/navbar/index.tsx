'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Props = {}
interface Links {
  id: number
  name: string
  path: string
}
const Navbar = ({}: Props) => {
  const [state, setState] = useState(false)
  const link: Links[] = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About us', path: '/about' },
    { id: 3, name: 'Blogs', path: '/blogs' },
    { id: 4, name: 'Gallery', path: '/gallery' },
    { id: 5, name: 'Team', path: '/team' },
    { id: 6, name: 'Merchandise', path: '/merchandise' },
  ]
  const router = useRouter()
  const pathname = usePathname()
  const click = () => {
    setState(!state)
  }
  return (
    <>
      <div className="md:hidden z-[999999] backdrop-blur-md bg-transparent fixed top-0 h-[7vh] left-0 w-full">
        <div className="fixed  top-0 left-0 md:hidden">
          <input
            className="menu-btn"
            type="checkbox"
            checked={state}
            id="menu-btn"
          />
          <label className="menu-icon " htmlFor="menu-btn" onClick={click}>
            <span className="navicon"></span>
          </label>
        </div>
      </div>
      <div
        className={`flex items-center z-[9998]  justify-center h-[100vh] md:h-auto px-[6vw] py-6 bg-transparent fixed top-0 md:left-0 ${
          state ? 'left-0' : 'left-[-100%]'
        } transition-all duration-200 ease-linear  w-[100vw] z-20 backdrop-blur-md`}
      >
        <div className="uppercase flex flex-col md:flex-row items-center text-xs font-semibold text-white md:h-auto h-[40vh]  w-3/6 justify-between">
          {link.map((elem: Links, index: number) => {
            return (
              <Link
                onClick={() => setState(!state)}
                key={index}
                href={elem.path}
                className={`cursor-pointer transition-all hover:text-main ${
                  elem.path === pathname ? 'text-main' : ''
                }`}
              >
                {elem.name}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Navbar

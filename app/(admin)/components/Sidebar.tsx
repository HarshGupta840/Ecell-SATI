import Image from 'next/image'
import React from 'react'
import logo from '@/app/img/logo.png'
import Link from 'next/link'
interface Links {
  name: string
  url: string
}
const Sidebar = () => {
  const links: Links[] = [
    { name: 'Upcomming Events', url: '#' },
    { name: 'Gallary', url: '#' },
    { name: 'Members', url: '#' },
    { name: 'Recruitment Request', url: '#' },
  ]
  return (
    <div className=" w-2/12 flex flex-col items-center h-[100vh]  border-solid border-[#FFD600] border-r-[1px] pt-12">
      <Image
        src={logo}
        alt="Logo image"
        width={150}
        className="w-[220px] h-auto"
      />
      <div className="flex flex-col gap-12 items-center text-white text-lg">
        {links.map((elem: Links, idx: number) => {
          return (
            <Link
              key={idx}
              href={elem.url}
              className=" mt-8 text-[24px] font-bold hover:text-[#FFD600] transition-all"
            >
              {elem.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar

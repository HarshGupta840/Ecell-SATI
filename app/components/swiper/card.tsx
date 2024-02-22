'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import blog from '../../img/Blog.png'
import Link from 'next/link'

type Props = {
  page: number
  heading: string
  image: StaticImageData
  subHeading: string
}

const Swipercard = ({ heading, image, page, subHeading }: Props) => {
  return (
    <>
      <div className="md:w-[290px] md:h-[390px] w-[240px] flex items-center h-[330px]  relative group cursor-pointer transition-all group-hover:scale-110">
        <div
          className={`absolute text-white bottom-0 py-3 px-4 bg-transparent group-hover:opacity-100 transition-all duration-150 ease-in  group-hover:bg-black flex flex-col gap-3 rounded-[0px_0px_30px_30px] z-20`}
        >
          <h1 className="text-[20px] md:text-2xl font-bold">{heading}</h1>
          <p className="leading-normal font-[400] texxt-[16px] md:text-[18px] line-clamp-3">
            {subHeading}
          </p>
          <Link
            href={{
              pathname: '/blogs',
              query: { page: page },
            }}
            className="buttona-border border-gradient-to-r group-hover:text-border-gradient-to-r from-pink to-skyblue group-hover:text-transparent bg-clip-text bg-gradient-to-r mt-3 w-[150px] md:w-[190px] py-2 text-center items-center bg-[#00000066] border-2 rounded-[5px] font-semibold text-lg"
          >
            Read More
          </Link>
        </div>
        <Image
          src={image}
          alt="Blog"
          className={`rounded-[30px] h-full w-full  group-hover:opacity-60  transition-all cursor-pointer object-cover`}
        />
      </div>
    </>
  )
}

export default Swipercard

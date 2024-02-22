'use client'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import effectright from '@/app/img/effects/event-right.png'
import effectleft from '@/app/img/effects/event-left.png'
type Props = {}
const Upcommingevents = ({}: Props) => {
  return (
    <>
      <section className="bg-gradient-to-r from-pink  to-main rounded-[15px] p-0.5 relative mt-10">
        <Image
          src={effectleft}
          alt="effect"
          className="absolute left-0 bottom-0"
        />
        <Image
          src={effectright}
          alt="effect"
          className="absolute right-0 top-0"
        />
        <section className="md:w-[716px] w-[300px] items-center justify-center flex sm:w-[580px]  bg-[#101010] rounded-[15px] px-3 py-8 ">
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div>
              {/* <div className="bg-gradient-to-r from-pink  to-main rounded-[15px] p-0.5 z-[100]"> */}
              <div className="md:w-[300px] md:h-[300px] sm:w-[200px] w-[150px] h-[150px] sm:h-[300px] rounded-[15px] bg-black"></div>
              {/* </div> */}
            </div>
            <div className="w-[275px] md:w-[350px] h-auto  flex flex-col gap-2">
              <h1 className="bg-gradient-to-r from-main md:text-left to-pink bg-clip-text text-center text-transparent font-bold text-[25px] md:text-[32px]">
                Event Name
              </h1>
              <p className="md:text-[18px] text-[14px] text-center md:text-left font-normal text-white leading-[25px] md:leading-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris
                pretium lacus eget vulputate rhoncus.{' '}
              </p>
              {/* <div className="bg-gradient-to-r from-skyblue rounded-[5px] p-0.5  to-pink"> */}
              <button className="cursor-pointer bg-gradient-to-r from-main to-pink bg-clip-text text-transparent border-[1px] border-violet-100 py-2 rounded-[5px] bg-black md:text-[20px] text-center">
                Participate
              </button>
              {/* </div> */}
            </div>
            <div></div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Upcommingevents

'use client'
import React, { useRef, useEffect } from 'react'
import gsap, { Power4 } from 'gsap'
import { Nothing } from '@/app/utlis/font'

type Props = {}

const Preloader = ({}: Props) => {
  let logo_1 = useRef(null)
  const timeline = gsap.timeline()
  useEffect(() => {
    console.log('glitch called')
    timeline
      .to(logo_1.current, {
        duration: 1,
        // scale: 19,
        transition: Power4.easeInOut,
        delay: 2,
      })
      .to(
        logo_1.current,
        {
          opacity: 0,
          transition: Power4.easeInOut,
          duration: 0.5,
        },
        '-=0.4',
      )
  })
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen w-full bg-black overflow-hidden z-[10000]">
        <h1
          ref={logo_1}
          className={`stroke animate-pulse text-[25px] md:text-[70px] xl:text-[85px] text-center `}
        >
          ENTREPRENEURSHIP CELL
        </h1>
      </div> */}
      <section className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="loading loading05 font-semibold md:font-extrabold  flex gap-1 md:gap-4">
          <span className="md:text-[80px] text-[25px]">E</span>
          <span className="md:text-[80px] text-[25px]">N</span>
          <span className="md:text-[80px] text-[25px]">T</span>
          <span className="md:text-[80px] text-[25px]">R</span>
          <span className="md:text-[80px] text-[25px]">E</span>
          <span className="md:text-[80px] text-[25px]">P</span>
          <span className="md:text-[80px] text-[25px]">R</span>
          <span className="md:text-[80px] text-[25px]">E</span>
          <span className="md:text-[80px] text-[25px]">N</span>
          <span className="md:text-[80px] text-[25px]">E</span>
          <span className="md:text-[80px] text-[25px]">U</span>
          <span className="md:text-[80px] text-[25px]">R</span>
          <span className="md:text-[80px] text-[25px]">S</span>
          <span className="md:text-[80px] text-[25px]">H</span>
          <span className="md:text-[80px] text-[25px]">I</span>
          <span className="md:text-[80px] text-[25px]">P</span>
          <span className="md:text-[80px] text-[25px]"> &nbsp;</span>
          <span className="md:text-[80px] text-[25px]">C</span>
          <span className="md:text-[80px] text-[25px]">E</span>
          <span className="md:text-[80px] text-[25px]">L</span>
          <span className="md:text-[80px] text-[25px]">L</span>
        </div>
      </section>
    </>
  )
}

export default Preloader

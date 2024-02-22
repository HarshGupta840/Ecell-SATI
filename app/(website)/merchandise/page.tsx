'use client'
import React, { useEffect } from 'react'
import { Application } from '@splinetool/runtime'
import right from '@/app/img/effects/top-right-mearch.png'
import left from '@/app/img/effects/bottom-left-mearch.png'
import Image from 'next/image'
import Spline from '@splinetool/react-spline'
import mearch from '@/app/img/Mearch.png'
type Props = {}

const Merchandise = ({}: Props) => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document.getElementById(
      'canvas3d',
    ) as HTMLCanvasElement
    if (canvas) {
      const app = new Application(canvas)
      app.load('https://prod.spline.design/NH9qmi9hL1S5Bvsg/scene.splinecode')
    }
  }, [])
  return (
    <>
      <section className="cursor-move pt-[4.5rem] relative ">
        <Image src={right} alt="effecr" className="absolute top-0 right-0" />
        <Image src={left} alt="effecr" className="absolute bottom-0 left-0" />
        <section className="w-full h-[480px] hidden md:inline-block">
          {/* <canvas id="canvas3d"></canvas> */}
          <Spline scene="https://prod.spline.design/NH9qmi9hL1S5Bvsg/scene.splinecode" />
        </section>
        <div className="flex justify-center items-center pb-[2rem]">
          <div className="flex flex-col xl:gap-3 min-[1700px]:gap-6">
            <div className="justify-center  md:flex items-center">
              <p className=" flex gap-2 items-center w-fit text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M21.7686 10.935L23.7598 13.5787L21.7686 16.3462"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.40869 13.6462H23.5912"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.32148 10.935L3.24023 13.5787L5.32148 16.3462"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.40869 13.6462H23.5912"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.32148 10.935L3.24023 13.5787L5.32148 16.3462"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7998 5.3775L13.4323 3.375L16.1998 5.3775"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 23.7263V3.54376"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7998 21.8137L13.4323 23.9062L16.1998 21.8137"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 23.7263V3.54376"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7998 21.8137L13.4323 23.9062L16.1998 21.8137"
                      stroke="#D9D9D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-white hidden md:inline-block text-[12px] text-center font-[300]">
                  Click, Hold & Drag to interact with our amazing Merchandise
                </span>
              </p>
            </div>
            <div className="md:hidden">
              <Image src={mearch} alt="mearch" />
            </div>
            <h1 className="text-[20px] mb-6 mt-4 text-center md:text-[24px] uppercase xl:text-5xl min-[1700px]:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-main to-pink bg-black">
              OUR MERCHANDISE
            </h1>
            <div className="rounded-md mx-auto bg-gradient-to-r from-skyblue to-pink p-0.5 mb-10">
              <button
                disabled
                className="rounded-md flex w-[170px] h-[32px]  md:h-[50px] md:w-[360px] text-white cursor-pointer  items-center font-medium justify-center bg-[#101010]"
              >
                Comming...
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Merchandise

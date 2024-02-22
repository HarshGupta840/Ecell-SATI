'use client'
import React, { useEffect } from 'react'
import { Application } from '@splinetool/runtime'
import { Nothing } from '@/app/utlis/font'
import Link from 'next/link'
import Image from 'next/image'
import sati from '@/app/img/sati.png'

type Props = {}

const Topview = ({}: Props) => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document.getElementById(
      'canvas3d',
    ) as HTMLCanvasElement

    if (canvas) {
      const app = new Application(canvas)
      app.load('https://prod.spline.design/s6V0oE2UyqbwByQt/scene.splinecode')
    }
  }, [])
  return (
    <>
      {' '}
      <section className="bg-dark flex h-[80vh] sm:h-[85vh] md:h-[100vh] relative w-full overflow-hidden ">
        <Image
          src={sati}
          alt="colage"
          className="absolute top-[7px] md:top-[4px] right-[1rem] md:right-0 object-fill md:left-[3rem] md:h-[60px] md:w-[55px] h-[45px] w-[40px] z-[99999999]"
          height={60}
          width={55}
          quality={100}
          data-aos="zoom" data-aos-delay="10" data-aos-duration="1000"
        />
        {/* scroll down  */}
        <div
          className="absolute hidden md:flex flex-col gap-2 bottom-[10rem] right-[3rem] z-40 cursor-pointer"
          onClick={() => {
            const element = document.getElementById('know-more')
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}
        >
          <p className="vertical-text text-[#FFD600]" data-aos="slide-down" data-aos-delay="10" data-aos-duration="1000">Scroll Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="50"
            viewBox="0 0 30 60"
            fill="none"
            data-aos="zoom-in" data-aos-delay="10" data-aos-duration="1000"
          >
            <path
              d="M13.5858 59.4142C14.3668 60.1953 15.6332 60.1953 16.4142 59.4142L29.1421 46.6863C29.9232 45.9052 29.9232 44.6389 29.1421 43.8579C28.3611 43.0768 27.0948 43.0768 26.3137 43.8579L15 55.1716L3.68629 43.8579C2.90524 43.0768 1.63891 43.0768 0.857864 43.8579C0.0768156 44.6389 0.0768156 45.9052 0.857864 46.6863L13.5858 59.4142ZM13 0L13 58H17L17 0L13 0Z"
              fill="#FFD600"
            />
          </svg>
        </div>
        <div className="flex flex-col w-full">
          <div className=" w-full flex mt-[4rem] items-center  flex-col">
            <p className="md:hidden text-white text-center px-[2vw]" data-aos="fade-in" data-aos-delay="10" data-aos-duration="1000" >
              Samrat Ashok Technological Institute, Vidisha
            </p>
            <h1 className="uppercase text-2xl  text-center px-[2vw] md:text-5xl font-[700] text-transparent bg-clip-text bg-gradient-to-r from-main to-pink" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000">
              Entrepreneurship Cell
            </h1>
            <p className="hidden md:inline-block mt-2 text-white text-center px-[2vw]">
              Samrat Ashok Technological Institute, Vidisha
            </p>
          </div>
          <div className="md:h-full md:w-full h-[100vw] w-[100vw] top-[5.5rem] min-[425px]:top-[5rem] md:mt-3   sm:top-[1rem] md:top-0 md:absolute">
            <canvas id="canvas3d"></canvas>
          </div>
          <div className=" w-full flex md:mt-[5rem] xl:mt-[5rem] items-center flex-col gap-4 md:absolute md:bottom-[2rem]">
            <p className={`${Nothing.className} text-white`} >
              Thumbs Up Entrepreneurship
            </p>
            <Link
              href={'/about'}
              className="bg-gradient-to-r from-pink to-main text-black text-lg font-bold py-1 px-8 mt-2 hover:scale-[1.1] transition-all duration-100 ease-linear rounded-ss-xl rounded-ee-xl cursor-pointer z-50"
              
            >
              Explore now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Topview

'use client'
import React from 'react'
import effect from '@/app/img/effects/Ellipse 52.png'
import Link from 'next/link'
import Image from 'next/image'

import AOS from 'aos'
import 'aos/dist/aos.css'
// -- ANIMATION ---
import { useEffect } from 'react'

type Props = {}

const Footer = ({}: Props) => {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init()
  }, [])

  const events = () => {
    const element = document.getElementById('events')
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const blogs = () => {
    const element = document.getElementById('blogs')
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const BackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const partners = () => {
    const element = document.getElementById('partners')
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <section className="relative md:h-[45vh] h-[75vh] overflow-hidden">
      <Image
        src={effect}
        alt="image"
        className="hidden absolute top-[-94px] z-[10] left-0 rotate-90 w-[70%] h-full md:h-auto md:w-auto"
      />

      <div className="bg-dark relative  flex flex-col gap-4 items-center justify-evenly px-[5vw] pt-[1rem] border-t border-t-pink">
        <div className="flex md:flex-row flex-col justify-between w-full box-border">
          <div className="z-[1000]">
            <h1
              className="text-2xl font-bold text-white "
              data-aos="zoom-out"
              data-aos-delay="10"
              data-aos-duration="1000"
            >
              E-cell SATI, Vidisha
            </h1>
            <div className="flex items-center mt-2 justify-between  w-[40vw] md:w-[12vw] ">
              <Link
                href={'https://www.instagram.com/ecellsati/?hl=en'}
                target="_blank"
                className="cursor-pointer z-[1000]"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M30.45 4.375H11.55C8.0706 4.375 5.25 7.1956 5.25 10.675V31.325C5.25 34.8043 8.0706 37.625 11.55 37.625H30.45C33.9293 37.625 36.75 34.8043 36.75 31.325V10.675C36.75 7.1956 33.9293 4.375 30.45 4.375Z"
                    stroke="url(#paint0_linear_125_15)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M21 27.125C24.3827 27.125 27.125 24.3827 27.125 21C27.125 17.6173 24.3827 14.875 21 14.875C17.6173 14.875 14.875 17.6173 14.875 21C14.875 24.3827 17.6173 27.125 21 27.125Z"
                    stroke="url(#paint1_linear_125_15)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M30.625 14C32.0747 14 33.25 12.8248 33.25 11.375C33.25 9.92525 32.0747 8.75 30.625 8.75C29.1753 8.75 28 9.92525 28 11.375C28 12.8248 29.1753 14 30.625 14Z"
                    fill="black"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_125_15"
                      x1="21"
                      y1="4.375"
                      x2="21"
                      y2="37.625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_125_15"
                      x1="21"
                      y1="14.875"
                      x2="21"
                      y2="27.125"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <Link
                href={'https://www.linkedin.com/company/ecellsatividisha/'}
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="350"
                data-aos-duration="1000"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M34.1075 5.37207H7.8925C6.19147 5.37207 4.8125 6.75104 4.8125 8.45207V33.547C4.8125 35.248 6.19147 36.627 7.8925 36.627H34.1075C35.8085 36.627 37.1875 35.248 37.1875 33.547V8.45207C37.1875 6.75104 35.8085 5.37207 34.1075 5.37207Z"
                    stroke="url(#paint0_linear_178_18)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.125 21V36.6275"
                    stroke="url(#paint1_linear_178_18)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.125 14V14.875"
                    stroke="url(#paint2_linear_178_18)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18.375 21V36.6275"
                    stroke="url(#paint3_linear_178_18)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18.375 34.8775V28C18.375 25.095 20.72 22.75 23.625 22.75C26.53 22.75 28.875 25.095 28.875 28V35"
                    stroke="url(#paint4_linear_178_18)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_178_18"
                      x1="21"
                      y1="5.37207"
                      x2="21"
                      y2="36.627"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_178_18"
                      x1="13.625"
                      y1="21"
                      x2="13.625"
                      y2="36.6275"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_178_18"
                      x1="13.625"
                      y1="14"
                      x2="13.625"
                      y2="14.875"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_178_18"
                      x1="18.875"
                      y1="21"
                      x2="18.875"
                      y2="36.6275"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_178_18"
                      x1="23.625"
                      y1="22.75"
                      x2="23.625"
                      y2="35"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <Link
                href={'#'}
                data-aos="zoom-in"
                data-aos-delay="700"
                data-aos-duration="1000"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="none"
                >
                  <path
                    d="M34.9195 5.37207H8.08034C6.3388 5.37207 4.927 6.75104 4.927 8.45207V33.547C4.927 35.248 6.3388 36.627 8.08034 36.627H34.9195C36.661 36.627 38.0728 35.248 38.0728 33.547V8.45207C38.0728 6.75104 36.661 5.37207 34.9195 5.37207Z"
                    stroke="url(#paint0_linear_125_19)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M25.1192 12.25H21.7688C19.6367 12.25 17.9167 13.93 17.9167 16.0125V36.6275"
                    stroke="url(#paint1_linear_125_19)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14.3333 22.75H23.2916"
                    stroke="url(#paint2_linear_125_19)"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_125_19"
                      x1="21.4999"
                      y1="5.37207"
                      x2="21.4999"
                      y2="36.627"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_125_19"
                      x1="21.518"
                      y1="12.25"
                      x2="21.518"
                      y2="36.6275"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_125_19"
                      x1="18.8124"
                      y1="22.75"
                      x2="18.8124"
                      y2="23.75"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD600" />
                      <stop offset="1" stop-color="#FF30E3" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-8 md:mt-0 md:w-6/12 w-full text-white font-extralight h-[30vh]">
            <div className="overflow-y-hidden">
              <p
                className="font-bold text-[29px] mb-4 text-left overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-duration="1000"
              >
                Resources
              </p>
            </div>
            <div className="flex justify-between w-full">
              <div className="h-full flex flex-col gap-4">
                <div className="overflow-y-hidden">
                  <p
                    onClick={events}
                    className="text-[16px] cursor-pointer font-normal "
                    data-aos="fade-up"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                  >
                    Events
                  </p>
                </div>
                <div className="overflow-y-hidden">
                  <Link
                    href={'/gallery'}
                    data-aos="fade-up"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    className="text-[16px] w-full block cursor-pointer font-normal"
                  >
                    Gallery
                  </Link>
                </div>
                <div className="overflow-y-hidden">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="40"
                    data-aos-duration="1000"
                    onClick={(e) => {
                      BackToTop()
                    }}
                    className="text-[16px] cursor-pointer font-normal"
                  >
                    Back to top
                  </p>
                </div>
              </div>
              <div className="h-[90%] flex flex-col gap-4">
                <div className="overflow-y-hidden">
                  <p
                    className="text-[16px] cursor-pointer font-normal"
                    onClick={blogs}
                    data-aos="fade-up"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                  >
                    Blogs
                  </p>
                </div>
                <div className="overflow-y-hidden">
                  <p
                    className="text-[16px] cursor-pointer font-normal block"
                    onClick={partners}
                    data-aos="fade-up"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                  >
                    Partners
                  </p>
                </div>
                <div className="overflow-y-hidden">
                  <Link
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay="40"
                    data-aos-duration="1000"
                    href={
                      'https://drive.google.com/file/d/1lu0TzLkZq50f1YzLuDIBZlE9_uEv1gwH/view?usp=sharing'
                    }
                    className="text-[16px] cursor-pointer font-normal block"
                  >
                    Terms & <br />
                    Conditions
                  </Link>
                </div>
              </div>
              <div className="h-[90%] flex flex-col gap-4">
                <div className="">
                  <p
                    className="text-[16px] group cursor-pointer font-normal relative"
                    data-aos="fade-up"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                  >
                    Support
                    <span className="absolute hidden text-gray-500 group-hover:inline-block -top-3 right-[9px] text-[12px]">
                      support@ecellsati.in{' '}
                    </span>
                  </p>
                </div>
                <div className="overflow-y-hidden">
                  <Link
                    href={
                      'https://drive.google.com/file/d/1NAphKQ_HP1Sxo3c2eXowbZOTvfz4wH9k/view?usp=sharing'
                    }
                    data-aos="fade-up"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    className="text-[16px] cursor-pointer font-normal block"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div className="overflow-y-hidden">
                  <Link
                    href={'/about'}
                    className="text-[16px] cursor-pointer font-normal block"
                    data-aos="fade-up"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col  mt-2 items-center gap-5 md:gap-0 md:justify-between text-white font-extralight w-full">
          <div
            className=""
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="30"
            data-aos-duration="1000"
          >
            <p className="text-gray-300 text-[20px] ">
              <span className="text-white font-semibold text-[20px] ">
                E-Cell, SATI VIDISHA
              </span>
            </p>
            <p className="text-gray-400 text-xs mt-5 md:mt-2 text-[18px]">
              2023. E-CELL S.A.T.I. Vidisha. All Rights Reserved.
            </p>
          </div>
          <p
            className=" md:text-end  text-gray-400"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="30"
            data-aos-duration="1000"
          >
            Designed & Developed by:
            <br />
            Sarthak Gour, Harsh Gupta , Anekant Jain
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer

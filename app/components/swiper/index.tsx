'use client'
import React from 'react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Swipercard from './card'
import stress from '@/app/img/blogs/stress.jpg'
import nykaa from '@/app/img/blogs/nykaa.jpg'
import traditional from '@/app/img/blogs/entrevstrad.jpg'
import mindest from '@/app/img/blogs/mindset.jpg'
import social from '@/app/img/blogs/socialmediaentre.jpg'
import { StaticImageData } from 'next/image'

type Props = {}
interface Data {
  page: number
  heading: string
  image: StaticImageData
  subHeading: string
}
const data: Data[] = [
  {
    heading: 'Managing Stress and Burnout as an Entrepreneur',
    image: stress,
    subHeading:
      "Entrepreneurship is often depicted as an exhilarating journey of innovation, ambition, and the pursuit of one's dreams. ",
    page: 1,
  },
  {
    heading: 'How NYKAA becomes the beauty unicorn',
    image: nykaa,
    subHeading:
      'In the dynamic landscape of startups and unicorns, Nykaa stands out as a remarkable success story. Founded in 2012 by',
    page: 13,
  },
  {
    heading: 'War between entrepreneurship and employment',
    image: traditional,
    subHeading:
      "As we embark on this journey of discovery, let's delve deep into the choices that await you on the road to your career.",
    page: 17,
  },
  {
    heading: 'From a dreamer to an entrepreneur-Smiling Skins',
    image: stress,
    subHeading:
      'In the wake of the COVID-19 pandemic, many businesses faced unprecedented challenges. But in the midst of adversity,',
    page: 22,
  },
  {
    heading: 'How likes turns into income -Social media entrepreneurship',
    image: social,
    subHeading:
      'In an age defined by digital connectivity, social media has emerged as a transformative platform not only for communication and personal expression but ..........',
    page: 28,
  },
]
const Swipe = ({}: Props) => {
  return (
    <>
      <div className="h-auto bg-dark  blogsBg relative pt-12 md:mt-0 overflow-hidden">
        <h1
          className="text-4xl text-center md:text-left font-bold mx-[6vw] mb-10 gradients overflow-y-hidden"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          OUR BLOGS
        </h1>
        <div
          className="relative w-[70%]   md:w-[85%] mx-auto"
          data-aos="zoom-in"
          data-aos-delay="10"
          data-aos-duration="1000"
        >
          <div className="container relative md:mx-auto" id="blogs">
            <Swiper
              className="mt-5"
              modules={[Navigation, Pagination, Autoplay, A11y]}
              navigation={{
                nextEl: '.next',
                prevEl: '.prev',
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              {data.map((elem: Data, index: number) => {
                return (
                  <SwiperSlide key={index} className="flex">
                    <Swipercard
                      heading={elem.heading}
                      image={elem.image}
                      page={elem.page}
                      subHeading={elem.subHeading}
                    />
                  </SwiperSlide>
                )
              })}
              {/* <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <Swipercard />
              </SwiperSlide> */}
            </Swiper>
            <button className="prev absolute top-[47%] z-[1] -left-[1.5rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="59"
                viewBox="0 0 27 59"
                fill="none"
              >
                <path
                  d="M24.3571 2L4 31L24.3571 57"
                  stroke="#FFD600"
                  stroke-width="5"
                />
              </svg>
            </button>
            <button className="next absolute top-[47%] -right-[1.5rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="59"
                viewBox="0 0 27 59"
                fill="none"
              >
                <path
                  d="M2.64286 57L23 28L2.64286 2"
                  stroke="#FFD600"
                  stroke-width="5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Swipe

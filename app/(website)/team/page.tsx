'use client'
import Image from 'next/image'
import React, { useRef, useState, MutableRefObject } from 'react'
import sharad from '@/app/img/members/Sharad.png'
import aryan from '@/app/img/members/Aryan.png'
import sarthak from '@/app/img/members/Sarthak.png'
import Link from 'next/link'
import shruti from '@/app/img/members/shruti.png'
import anamika from '@/app/img/members/anamika.png'
import archi from '@/app/img/members/archi.png'
import muskan from '@/app/img/members/muskan.png'
import kunal from '@/app/img/members/kunal.png'
import rukaiya from '@/app/img/members/rukaiya.png'
import group from '@/app/img/members/Group.png'
import linkedin from '@/app/img/Linkedin.svg'
import insta from '@/app/img/Instagram.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'
// -- ANIMATION ---
import { useEffect } from 'react'
type Props = {}
const Team = ({}: Props) => {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init()
  }, [])

  const elementRef: MutableRefObject<HTMLImageElement | null> = useRef(null)
  const [point, setPoint] = useState({ x: 0, y: 0 })

  let tags = [
    {
      name: 'Anekant Jain',
      position: 'Tech Representative',
      x: '45.6640625',
      y: '66.05142325409187',
    },
    {
      name: 'Aanya Joshi',
      position: 'Member',
      x: '48.0078125',
      y: '78.28282821276956',
    },
    {
      name: 'Rahul Harode',
      position: 'Member',
      x: '58.6640625',
      y: '70.05142325409187',
    },
    {
      name: 'Harsh Gupta',
      position: 'Tech Representative',
      x: '38.4640625',
      y: '62.05142325409187',
    },
    {
      name: 'Mitali Deshmukh',
      position: 'Member',
      x: '75.0078125',
      y: '78.28282821276956',
    },
    {
      name: 'Arshpreet Singh',
      position: 'Member',
      x: '50.1640625',
      y: '62.05142325409187',
    },
  ]

  return (
    <>
      <section className="w-[90vw] mx-auto bg-[#101010] overflow-x-hidden">
        <section className="container mx-auto mb-12 md:mb-0">
          <h2
            className="bg-gradient-to-r from-main to-pink bg-clip-text text-transparent pt-8 mt-24 bg-[#101010] mb-10 text-[48px] font-bold w-full text-center"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            OUR TEAM
          </h2>
          <div className="flex items-center flex-col gap-1 mb-8 md:hidden">
            <Image
              alt="members"
              src={sarthak}
              className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
            />
            <span className="md:text-[20px] text-[14px] font-bold text-white">
              Sarthak Gour
            </span>
            <span className="md:text-[18px] text-[12px] font-normal text-white">
              President
            </span>
            <div className="flex justify-around gap-4">
              <Link
                target="_blank"
                href={'https://www.linkedin.com/in/sarthak-gour-abb576179/'}
              >
                <Image
                  src={linkedin}
                  alt="mane"
                  className="w-[20px] md:w-[40px]"
                />
              </Link>
              <Link
                target="_blank"
                href={'https://www.instagram.com/ft.srthk/?hl=en'}
              >
                <Image
                  src={insta}
                  alt="mane"
                  className="w-[20px] md:w-[40px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex  md:w-[650px] justify-around md:justify-between mx-auto">
            <div
              className="flex items-center flex-col gap-1"
              data-aos="fade-in"
              data-aos-delay="10"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={sharad}
                className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Sharad Tripathi
              </span>
              <span className="md:text-[18px] text-[12px] font-normal text-white">
                Vice President
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/sharadtripathi/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://instagram.com/_tripathi_sharad?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            <div
              className="hidden md:flex items-center flex-col gap-1"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={sarthak}
                className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Sarthak Gour
              </span>
              <span className="md:text-[18px] text-[12px] font-normal text-white">
                President
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/sarthak-gour-abb576179/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/ft.srthk/?hl=en'}
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            <div
              className="flex items-center flex-col gap-1"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={aryan}
                className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Aryan Sadana
              </span>
              <span className="md:text-[18px] text-[12px] font-normal text-white">
                Vice Precident
              </span>
              <div className="flex justify-around gap-4">
                <Link href={'https://www.linkedin.com/in/aryansadana/'}>
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://instagram.com/aryansxdana?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex grid grid-cols-3 gap-y-12 container justify-between mx-auto mt-20">
            {/* shruti  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="900"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={shruti}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Shruti Shastri
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Marketing Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={
                    'https://instagram.com/kunal__shukla____?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://instagram.com/__shruti_s__?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* rukaiya  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="1200"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={rukaiya}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Rukaiya Hasan
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Management Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  href={'https://www.linkedin.com/in/rukaiya-bano-814908209/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href={
                    'https://instagram.com/rukaiya.rk24?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* anamika  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="1500"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={anamika}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Anamika Jain
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Tech Head
              </span>
              <div className="flex justify-around gap-4">
                <Link href={'https://www.linkedin.com/in/anamika-jain1/'}>
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href={
                    'https://instagram.com/__anamika.jain?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* archi  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="1800"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={archi}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Archi Patle
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Finance Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/archi-patle-243557225/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://instagram.com/archi_.7?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* muskan  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="2100"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={muskan}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Muskan Adwani
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Pr & Funds Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/muskan-adwani-0b2147213/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link href={'#'} target="_blank">
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* kunal  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="2400"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={kunal}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Kunal Shukla
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Design Head
              </span>
              <div className="flex justify-around gap-4">
                <Link href={'https://www.linkedin.com/in/kunalshukla902/'}>
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href={
                    'https://instagram.com/kunal__shukla____?igshid=MzRlODBiNWFlZA=='
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto my-24 relative ">
            <Image
              ref={elementRef}
              onClick={(event) => {
                if (elementRef.current) {
                  let height = elementRef.current.clientHeight
                  let width = elementRef.current.clientWidth
                  let screenWidth = (window.innerWidth - width) / 2
                  const rect = elementRef.current.getBoundingClientRect()
                  const x = ((event.clientX - screenWidth - 5) / width) * 100
                  const y = ((event.clientY - rect.top) / height) * 100
                  setPoint({ x, y })
                }
              }}
              src={group}
              alt="group"
              className="w-full rounded-[15px] cursor-pointer"
              data-aos="zoom-out"
              data-aos-delay="0"
              data-aos-duration="1000"
            />
            {tags.map((tag, i) => (
              <Dot tag={tag} key={i} />
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

const Dot = ({ tag }: any) => {
  const [visible, setVisible] = useState(false)

  const handleMouseEnter = () => {
    setVisible(true)
  }

  const handleMouseLeave = () => {
    setVisible(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-[rgba(0,0,0,0.8)] absolute cursor-pointer w-[1.75vw] h-[1.75vw] rounded-full border-[4px] border-[rgba(255,255,255,0.4)] opacity-40 transition-all hover:opacity-100"
      style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
    >
      <div
        className="py-4 w-[2.75vw] -translate-x-[30%]"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${
            visible ? 'block' : 'hidden'
          } w-fit absolute translate-y-[0%] left-[50%] -translate-x-[50%] bg-[rgba(0,0,0,0.8)] px-3 py-1 rounded-md text-white z-10`}
        >
          <h1 className="font-bold text-lg text-center whitespace-nowrap">
            {tag.name}
          </h1>
          <p className="text-center">({tag.position})</p>
        </div>
      </div>
    </div>
  )
}

export default Team

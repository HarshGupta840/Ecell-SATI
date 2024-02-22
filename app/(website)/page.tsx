'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// -- ANIMATION ---
import { useEffect } from 'react'
import effect1 from '../img/effects/Ellipse 44.png'
import Image from 'next/image'
import partners from '@/app/img/partner1.png'
import partner1 from '@/app/img/partner2.png'
import partner2 from '@/app/img/partner3.png'
import partner6 from '@/app/img/partner6.png'
import udanKhatola from '../img/package.png'
import Swipe from '../components/swiper'
import Knowmore from '../components/homepage/knowmore'
import Team from '../components/homepage/team'
import Topview from '../components/homepage/topview'
import Coreausal from '../components/homepage/coreausal'
import { toast } from 'react-toastify'

export default function Home() {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init()
  }, [])

  const [email, setEmail] = useState({
    email: '',
  })
  const BackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const suscribe = async (e: FormEvent) => {
    e.preventDefault()
    const call = () => {
      return new Promise((resolve, reject) => {
        fetch('/api/suscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(email),
        }).then((response) => {
          return response.json().then((responseData) => {
            if (response.ok) {
              resolve({ status: response.status, response: responseData })
            } else {
              reject(responseData.message)
            }
          })
        })
      })
    }
    try {
      await toast.promise(call, {
        pending: {
          render() {
            return 'please wait'
          },
        },
        success: {
          render(res: any) {
            return `${res.data?.response!?.message}`
          },
        },
        error: {
          render({ data }) {
            // When the promise reject, data will contains the error
            return `${data}`
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Image
        src={effect1}
        alt="Effect 1"
        className="absolute bottom-[-50vh] left-0 z-10 w-[20%] overflow-y-hidden"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="1000"
      />

      {/* top view section  */}
      <Topview />

      {/* know more section  */}
      <Knowmore />

      {/* swiper section  */}
      <Swipe />

      {/* Gallary Section  */}
      <Coreausal />

      {/* out team   */}
      <Team />
      {/* parteners  */}
      <section
        className="sponserBg h-[50vw] mt-[4rem] md:mt-0 md:h-auto bg-dark px-[6vw] pb-10"
        id="partners"
      >
        <h1
          className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink to-main"
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          OUR PARTNERS
        </h1>
        <div className="flex justify-evenly items-center mt-10 mb-10">
          <Image
            alt="Company"
            src={partners}
            className="w-[50px] md:w-[150px] "
            data-aos="fade-in"
            data-aos-delay="30"
            data-aos-duration="1000"
          />
          <Image
            alt="Company"
            src={partner1}
            className="w-[50px] md:w-[150px]"
            data-aos="fade-in"
            data-aos-delay="230"
            data-aos-duration="1000"
          />
          <Image
            alt="Company"
            src={partner2}
            className="w-[50px] md:w-[150px]"
            data-aos="fade-in"
            data-aos-delay="430"
            data-aos-duration="1000"
          />
          <Image
            alt="Company"
            src={partner6}
            className="w-[50px] md:w-[150px]"
            data-aos="fade-in"
            data-aos-delay="630"
            data-aos-duration="1000"
          />
        </div>
      </section>

      {/* contact us  */}
      <section className="bg-black h-[70vh] border-t border-t-main relative flex flex-col justify-center items-center px-8 md:px-0 overflow-hidden">
        <Image
          src={udanKhatola}
          alt="Udan khatola"
          className="absolute md:w-1/12 w-[50px] top-[5rem] left-[5vw]"
          data-aos="slide-up"
          data-aos-delay="10"
          data-aos-duration="1000"
        />
        <h1
          className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink to-main"
          data-aos="zoom-in"
          data-aos-delay="10"
          data-aos-duration="1000"
        >
          GET NOTIFIED
        </h1>
        <p
          className="text-white font-light md:w-3/12 text-center mx-auto tracking-wider py-3"
          data-aos="fade-in"
          data-aos-delay="10"
          data-aos-duration="1000"
        >
          Be the first to know about the activities of E-Cell.{' '}
        </p>
        <h3
          className="text-2xl md:text-3xl font-semibold text-white"
          data-aos="fade-in-up"
          data-aos-delay="30"
          data-aos-duration="1000"
        >
          Ready for Email Drop?
        </h3>
        <form
          onSubmit={suscribe}
          className="flex flex-col items-center justify-center"
        >
          <div className="rounded-md bg-gradient-to-r from-pink to-main p-0.5 my-5">
            <input
              className="h-[40px] w-[350px] md:w-[400px] rounded-md pl-4 bg-black text-[#D9D9D9] text-[18px] font-[300] focus:outline-none"
              type="email"
              placeholder="Email"
              required
              value={email.email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail({ email: event.target.value })
              }
            />
          </div>
          <div
            className="rounded-md bg-gradient-to-r w-[184px]  from-main to-skyblue p-0.5"
            data-aos="zoom-out"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            <button
              type="submit"
              className="rounded-md flex h-full w-[179px] items-center justify-center bg-black text-white px-8 py-1  font-bold"
            >
              Subscribe
            </button>
          </div>
        </form>
        <div
          onClick={(e) => {
            BackToTop()
          }}
          className="absolute hidden  bottom-24 right-16 md:flex flex-col gap-2 justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="50"
            viewBox="0 0 30 60"
            fill="none"
          >
            <path
              d="M16.4142 0.585785C15.6332 -0.195263 14.3668 -0.195263 13.5858 0.585785L0.857864 13.3137C0.0768156 14.0948 0.0768156 15.3611 0.857864 16.1421C1.63891 16.9232 2.90524 16.9232 3.68629 16.1421L15 4.82843L26.3137 16.1421C27.0948 16.9232 28.3611 16.9232 29.1421 16.1421C29.9232 15.3611 29.9232 14.0948 29.1421 13.3137L16.4142 0.585785ZM17 60L17 2H13L13 60H17Z"
              fill="#FFD600"
            />
          </svg>
          <p
            className="vertical-text text-[#FFD600]"
            data-aos="slide-up"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            Back to top
          </p>
        </div>
      </section>
    </>
  )
}

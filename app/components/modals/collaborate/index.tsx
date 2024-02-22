'use client'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import effectright from '@/app/img/effects/corner-right.png'
import effectleft from '@/app/img/effects/corner-bottom-left.png'

type Props = {}
interface Input {
  name: string
  contact: string
  organization: string
  subject: string
  message: string
}
const Collborate = ({}: Props) => {
  const [inputData, setInputData] = useState<Input>({
    name: '',
    contact: '',
    organization: '',
    subject: '',
    message: '',
  })
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputData((prev: Input) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  return (
    <>
      <section className="bg-gradient-to-r from-pink  mt-10  via-red-500 to-yellow-500 rounded-[15px] p-0.5 relative">
        <Image
          src={effectleft}
          alt="effect"
          className="absolute left-0 bottom-0 "
        />
        <Image
          src={effectright}
          alt="effect"
          className="absolute right-0 top-0"
        />
        <section className="md:w-[716px] w-[320px] sm:w-[580px] h-[653px] bg-[#101010] rounded-[15px]">
          <h2 className="bg-gradient-to-r from-main to-pink bg-clip-text text-transparent pt-8  mb-10 sm:text-[25px] md:text-[32px] font-bold w-full text-center">
            Looking for Collaboration?
          </h2>
          <div className="flex flex-col justify-center gap-8">
            {/* name  */}
            <div className="w-full flex flex-col z-10 justify-center gap-2">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Name"
                name="name"
                autoComplete="off"
                value={inputData.name}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* contact  */}
            <div className="w-full flex flex-col z-10 justify-center gap-2">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Contact No."
                name="contact"
                autoComplete="off"
                value={inputData.contact}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* organizaion  */}
            <div className="w-full flex flex-col z-10 justify-center gap-2">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Organization/Company Name"
                name="organization"
                value={inputData.organization}
                onChange={handleInput}
                autoComplete="off"
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* subjext  */}
            <div className="w-full relative z-10 flex flex-col justify-center gap-2">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Subject"
                name="subject"
                value={inputData.subject}
                onChange={handleInput}
                autoComplete="off"
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* messgage  */}
            <div className="w-full flex flex-col z-10 justify-center gap-2">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Message"
                name="message"
                value={inputData.message}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* want to see it  */}
            {/* <div className="rounded-md bg-gradient-to-r from-pink to-main w-[285px] p-0.5"> */}
            <button className="rounded-md w-[220px] z-10 md:w-[285px] h-[45px] mx-auto border-[2px] border-emerald-50 bg-gradient-to-r from-skyblue to-pink bg-clip-text text-transparent flex cursor-pointer mt-4  items-center  justify-center bg-black px-8 py-1">
              Submit
            </button>
            {/* </div> */}
          </div>
        </section>
      </section>
      <input type="file" name="" id="docs" className="hidden" />
    </>
  )
}

export default Collborate

'use client'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import effectright from '@/app/img/effects/corner-right.png'
import effectleft from '@/app/img/effects/corner-bottom-left.png'

type Props = {}
interface Input {
  name: string
  contact: string
  join: string
  links: string
  branch: string
  year: string
  skills: string
  interest: string
  achievement: string
}
const Recrutement = ({}: Props) => {
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null)
  const options = ['1st', '2nd', '3rd', '4th']
  const [inputData, setInputData] = useState<Input>({
    name: '',
    contact: '',
    join: '',
    links: '',
    branch: '',
    year: '',
    skills: '',
    interest: '',
    achievement: '',
  })
  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setInputData((prev: Input) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const imageUrl = URL.createObjectURL(file!)
    console.log(file)
    if (file?.type === 'application/pdf') {
      setSelectedPdf(file)
      console.log(selectedPdf)
      return
    }
  }
  return (
    <>
      <section className="bg-gradient-to-r from-pink mt-10   to-main rounded-[15px] p-0.5 relative">
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
        <section className="md:w-[716px] md:h-[933px] w-[320px] h-[933px] sm:w-[580px] sm:h-[933px] bg-[#101010] rounded-[15px]">
          <h2 className="bg-gradient-to-r from-main to-pink bg-clip-text text-transparent pt-6  mb-6 sm:text-[25px] md:text-[32px] font-bold w-full text-center">
            Want to be a part of E-Cell?
          </h2>
          <div className="flex flex-col justify-center gap-6">
            {/* name */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
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
            {/* contact */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
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
            {/* why join */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Why do you want to join E-Cell?"
                name="join"
                value={inputData.join}
                onChange={handleInput}
                autoComplete="off"
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* resume  */}
            <div className="w-full relative flex flex-col justify-center gap-2 z-10">
              <label
                htmlFor="docs"
                className="top-[-6%] cursor-pointer absolute border-[2px] right-[2.5rem] md:right-[4.5rem] border-emerald-50 bg-gradient-to-r w-[125px] h-[35px] rounded-[5px] text-[14px] sm:text-[18px] from-skyblue to-pink bg-clip-text text-transparent flex  items-center  justify-center bg-black"
              >
                Upload
              </label>
              <p className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none">
                {selectedPdf ? selectedPdf.name : 'Resume'}
              </p>
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* link  */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Any other links?"
                name="links"
                value={inputData.links}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* branch  */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Branch"
                name="branch"
                autoComplete="off"
                value={inputData.branch}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* year  */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
              <select
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent cursor-pointer text-[#A1A1A1] text-[18px] font-[300] focus:outline-none"
                name="year"
                id=""
                value={inputData.year}
                onChange={handleInput}
                defaultValue=""
              >
                <option
                  className="!bg-[#101010] border-none p-2 cursor-pointer text-[#A1A1A1] text-[18px] font-[300]"
                  value={``}
                >
                  Year
                </option>
                <option
                  className="!bg-[#101010] border-none p-2 cursor-pointer text-[#A1A1A1] text-[18px] font-[300]"
                  value={`1st`}
                >
                  1st
                </option>
                <option
                  className="!bg-[#101010] border-none p-2 cursor-pointer text-[#A1A1A1] text-[18px] font-[300]"
                  value={`2st`}
                >
                  2nd
                </option>
                <option
                  className="!bg-[#101010] border-none p-2 cursor-pointer text-[#A1A1A1] text-[18px] font-[300]"
                  value={`3st`}
                >
                  3rd
                </option>
                <option
                  className="!bg-[#101010] border-none p-2 cursor-pointer text-[#A1A1A1] text-[18px] font-[300]"
                  value={`4st`}
                >
                  4th
                </option>
              </select>
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* skills  */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Any Skills?"
                name="skills"
                autoComplete="off"
                value={inputData.skills}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* area of interest  */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Contact No."
                name="interest"
                autoComplete="off"
                value={inputData.interest}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* past achievements s */}
            <div className="w-full flex flex-col justify-center gap-2 z-10">
              <input
                className="h-[40px] w-[80%] mx-auto rounded-md pl-4 bg-transparent text-[#A1A1A1] text-[14px] sm:text-[18px] font-[300] focus:outline-none"
                type="text"
                placeholder="Any Past Achievements"
                name="achievement"
                autoComplete="off"
                value={inputData.achievement}
                onChange={handleInput}
              />
              <div className="rounded-md h-[1px] w-[80%] mx-auto bg-gradient-to-r from-pink to-main pb-0.5"></div>
            </div>
            {/* want to see it  */}
            {/* <div className="rounded-md bg-gradient-to-r from-pink to-main w-[285px] p-0.5"> */}
            <button className="rounded-md w-[285px] h-[45px] mx-auto border-[2px] cursor-pointer mt-4 border-emerald-50 bg-gradient-to-r from-skyblue to-pink bg-clip-text text-transparent flex  items-center  justify-center bg-black px-8 py-1">
              Submit
            </button>
            {/* </div> */}
          </div>
        </section>
      </section>
      <input
        type="file"
        accept="application/pdf"
        id="docs"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  )
}

export default Recrutement

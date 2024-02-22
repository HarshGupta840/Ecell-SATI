'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useSession } from 'next-auth/react'

const Events = () => {
  const session = useSession()
  console.log(session)
  return (
    <div className=" ">
      <section className="w-[80%] mx-auto">
        <div className="grid my-5 gap-8 grid-cols-2">
          <div className="border  bg-gray-200 h-[50vh]"></div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="image"
              className="border-2 border-pink py-2 px-4  text-center cursor-pointer rounded-[6px]  bg-transparent mt-5 text-white focus:outline-none"
            >
              {' '}
              Upload
            </label>
            <textarea
              placeholder="Event Name"
              name="password"
              autoComplete="off"
              // value={inputValue.password}
              // onChange={handleChange}
              className="border-2 border-pink py-2 px-4  min-h-[100px] max-h-[100px] rounded-[6px]  bg-transparent mt-5 text-white focus:outline-none"
            />
            <textarea
              placeholder="Google Form Link"
              name="password"
              autoComplete="off"
              // value={inputValue.password}
              // onChange={handleChange}
              className="border-2 border-pink py-2 px-4  min-h-[100px] max-h-[100px] rounded-[6px]  bg-transparent mt-5 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="w-full">
          <textarea
            placeholder="Description"
            name="password"
            autoComplete="off"
            // value={inputValue.password}
            // onChange={handleChange}
            className="border-2 border-pink py-2 px-4 w-full h-[150px] rounded-[6px] bg-transparent mt-5 text-white focus:outline-none"
          />
        </div>
        <button className="text-black w-[390px] h-[45px] bg-[#FFD600] text-center rounded mt-8">
          Save
        </button>
      </section>
      <input type="file" name="" id="image" className="hidden" />
    </div>
  )
}

export default Events

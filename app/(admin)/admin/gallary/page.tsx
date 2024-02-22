'use client'
import React, { useState, useEffect } from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { ModalType, openModal } from '@/redux/slices/modal'
import { useDispatch } from 'react-redux'

type Props = {}

const Gallary = ({}: Props) => {
  const [data, setData] = useState([])
  const getData = async () => {
    const data = await fetch('/api/admin/gallery', {
      method: 'GET',
    })
    const res = await data.json()
    console.log(res.data)
    setData(res.data)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className="flex justify-between w-[80%] mx-auto mb-4">
        <p className="text-white text-[25px] font-extrabold">Events</p>
        <div
          className="text-white text-[25px] font-normal cursor-pointer"
          onClick={() => dispatch(openModal({ type: 'gallery' }))}
        >
          <BiImageAdd />
        </div>
      </div>
      <div className="rounded-md w-[80%] mx-auto bg-gradient-to-r from-skyblue to-pink p-0.5 h-[2px]"></div>
      <section className="flex flex-col gap-6 w-[80%] mx-auto mt-10">
        {data.map((elem: any, index: number) => {
          const stri = elem.date.split('T')[0]
          return (
            <div
              className="rounded-md bg-gradient-to-r from-skyblue to-pink p-0.5"
              key={index}
              onClick={() =>
                dispatch(openModal({ type: 'gallery', data: elem }))
              }
            >
              <div className="cursor-pointer flex justify-between bg-black py-5 px-10">
                <p className="text-white text-[20px] font-normal uppercase">
                  {elem.name}
                </p>
                <p className="text-[#FFD600] text-[20px] font-normal ">
                  {stri}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Gallary

import React from 'react'
import Image from 'next/image'
import effectright from '@/app/img/effects/event-right.png'
import effectleft from '@/app/img/effects/event-left.png'

type Props = {}

const Comming = ({}: Props) => {
  return (
    <>
      <section className="bg-gradient-to-r  from-pink  to-main rounded-[15px] p-0.5 relative mt-10">
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
        <section className="md:w-[716px] w-[300px] h-[450px] items-center justify-center flex sm:w-[580px]  bg-[#101010] rounded-[15px] px-3 py-8 ">
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="w-[275px] md:w-[350px] h-auto justify-between items-center gap-2">
              <h2 className="bg-gradient-to-r from-main to-pink bg-clip-text text-transparent pt-8  mb-10 sm:text-[25px] md:text-[35px] font-bold w-full text-center">
                Coming Soon... <br />
                Stay Tuned
              </h2>
            </div>
            <div></div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Comming

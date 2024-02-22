import aryan from '@/app/img/members/Aryan.png'
import sarthak from '@/app/img/members/Sarthak.png'
import sharad from '@/app/img/members/Sharad.png'
import shruti from '@/app/img/members/shruti.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Team = ({}: Props) => {
  return (
    <>
      <section className="mb-10 md:mb-0 h-[100vh] mt-[8rem] bg-dark px-[6vw]  teamBg flex md:flex-row flex-col items-center justify-around overflow-hidden">
        <div className="md:w-5/12 grid grid-cols-2 gap-x-12 gap-y-16 md:h-[90%]">
          <div className="border relative w-[115px] h-[125px]  md:w-[180px] md:h-[205px] flex flex-col justify-end ml-5" data-aos="zoom-in" data-aos-delay="10" data-aos-duration="1000">
            <Image
              src={sarthak}
              alt="Member"
              className="absolute -top-8 -right-6 w-[170px]"
              
            />
            <div className="flex flex-col my-1 text-white items-center w-full self-end justify-end">
              <p className="md:font-semibold font-normal text-[14px]">
                Sarthak Gour
              </p>
              <p className="flex items-center gap-1 text-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="17"
                  viewBox="0 0 15 24"
                  fill="none"
                >
                  <path
                    d="M7.49736 0L0 12.2223L7.49736 8.87469V0Z"
                    fill="white"
                  />
                  <path
                    d="M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z"
                    fill="white"
                  />
                  <path
                    d="M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z"
                    fill="white"
                  />
                  <path
                    d="M0 13.6199L7.49736 23.9998V17.9719L0 13.6199Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 17.9719V23.9998L15 13.6199L7.49707 17.9719Z"
                    fill="white"
                  />
                </svg>
                <span className="md:text-[17px] text-[11px]">
                  {'President'}
                </span>
              </p>
            </div>
          </div>
          <div className="border relative w-[115px] h-[125px]  md:w-[180px] md:h-[205px] flex flex-col justify-end mt-10" data-aos="zoom-in" data-aos-delay="110" data-aos-duration="1000">
            <Image
              src={aryan}
              alt="Member"
              className="absolute -top-8 -right-6 w-[170px]"
            />
            <div className="flex flex-col my-1 text-white items-center w-full self-end justify-end">
              <p className="md:font-semibold font-normal text-[14px]">
                Aryan Sadana
              </p>
              <p className="flex items-center gap-1">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="17"
                  viewBox="0 0 15 24"
                  fill="none"
                >
                  <path
                    d="M7.49736 0L0 12.2223L7.49736 8.87469V0Z"
                    fill="white"
                  />
                  <path
                    d="M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z"
                    fill="white"
                  />
                  <path
                    d="M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z"
                    fill="white"
                  />
                  <path
                    d="M0 13.6199L7.49736 23.9998V17.9719L0 13.6199Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 17.9719V23.9998L15 13.6199L7.49707 17.9719Z"
                    fill="white"
                  />
                </svg>
                <span className="md:text-[17px] text-[11px]">
                  {' Vice President'}
                </span>
              </p>
            </div>
          </div>
          <div className="border relative w-[115px] h-[125px]  md:w-[180px] md:h-[205px] flex flex-col justify-end ml-10 -mt-12" data-aos="zoom-in" data-aos-delay="210" data-aos-duration="1000">
            <Image
              src={sharad}
              alt="Member"
              className="absolute -top-8 -right-6 w-[170px]"
            />
            <div className="flex flex-col my-1 text-white items-center w-full self-end justify-end">
              <p className="md:font-semibold font-normal text-[14px]">
                Sharad Tripathi
              </p>
              <p className="flex items-center gap-1">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="17"
                  viewBox="0 0 15 24"
                  fill="none"
                >
                  <path
                    d="M7.49736 0L0 12.2223L7.49736 8.87469V0Z"
                    fill="white"
                  />
                  <path
                    d="M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z"
                    fill="white"
                  />
                  <path
                    d="M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z"
                    fill="white"
                  />
                  <path
                    d="M0 13.6199L7.49736 23.9998V17.9719L0 13.6199Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 17.9719V23.9998L15 13.6199L7.49707 17.9719Z"
                    fill="white"
                  />
                </svg>{' '}
                <span className="md:text-[17px] text-[11px]">
                  {' Vice President'}
                </span>
              </p>
            </div>
          </div>
          <div className="border relative w-[115px] h-[125px]  md:w-[180px] md:h-[205px] flex flex-col justify-end ml-5" data-aos="zoom-in" data-aos-delay="310" data-aos-duration="1000">
            <Image
              src={shruti}
              alt="Member"
              className="absolute -top-8 -right-6 w-[170px]"
            />
            <div className="flex flex-col my-1 text-white items-center w-full self-end justify-end">
              <p className="md:font-semibold font-normal text-[14px]">
                Shruti Shastri
              </p>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="17"
                  viewBox="0 0 15 24"
                  fill="none"
                >
                  <path
                    d="M7.49736 0L0 12.2223L7.49736 8.87469V0Z"
                    fill="white"
                  />
                  <path
                    d="M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z"
                    fill="white"
                  />
                  <path
                    d="M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z"
                    fill="white"
                  />
                  <path
                    d="M0 13.6199L7.49736 23.9998V17.9719L0 13.6199Z"
                    fill="white"
                  />
                  <path
                    d="M7.49707 17.9719V23.9998L15 13.6199L7.49707 17.9719Z"
                    fill="white"
                  />
                </svg>{' '}
                <span className="md:text-[17px] text-[11px]">
                  {' Marketing Head'}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-4/12 w-full flex flex-col items-center md:items-start">
          <h1 className="md:text-4xl text-3xl font-bold text-transparent bg-clip-text text-center bg-gradient-to-r from-pink to-main" data-aos="zoom-out" data-aos-delay="10" data-aos-duration="1000">
            MEET OUR TEAM
          </h1>
          <p className="text-white text-center font-extralight md:text-left mt-3 w-full md:w-full" data-aos="fade-up" data-aos-delay="10" data-aos-duration="1000">
            Meet the passionate individuals who are the driving force behind
            Entrepreneurship Cell. Our team is committed to nurturing
            entrepreneurship and to steering E-Cell towards a future filled with
            innovation and growth. We are united by a shared passion for
            nurturing the entrepreneurial spirit within our college and the
            broader community.
          </p>
          <div className="rounded-md bg-gradient-to-r from-pink to-main h-[55px] w-[245px] p-0.5 mt-8" data-aos="zoom-out" data-aos-delay="10" data-aos-duration="1000">
            <Link
              href={'/team'}
              className="flex h-full rounded-md w-full items-center justify-center bg-black text-white px-5 py-1"
            >
              Other Members
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team

'use client'
import React, { useState, useEffect } from 'react'
import left from '@/app/img/left.svg'
import right from '@/app/img/right.svg'
import Image from 'next/image'
import Slideshow from '../../slideshow'

type Props = {}
interface Images {
  _id: string
  name: string
  date?: string // Optional if it's not present in all objects
  mainImage?: string // Optional if it's not present in all objects
  imageurl: string[]
  __v: number
}
const Coreausal = ({}: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  )
  const [rotate, setRotate] = useState<number>(0)
  const [imageData, setImageData] = useState<Images[]>([])
  const [images, setImages] = useState<string[]>([])
  const getData = async () => {
    const data = await fetch('/api/admin/gallery', {
      method: 'GET',
    })
    const res = await data.json()
    setImageData(res.data)
    console.log(res)
  }
  const clicked = (rotation: string) => {
    const left = document.getElementById('carousel')
    if (rotation == 'r') {
      setRotate((prev: number) => {
        prev = prev - 60
        return prev
      })
      console.log(rotate)
      //   left!.style.transform = `rotateY(${rotate}deg)`
    }
    if (rotation == 'l') {
      setRotate((prev: number) => {
        prev = prev + 60
        return prev
      })
      console.log(rotate)
      //   left!.style.transform = `rotateY(${rotate}deg)`
    }
  }
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }
  const closeSlideshow = () => {
    setSelectedImageIndex(null)
  }
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev: number) => {
        prev = prev - 60
        return prev
      })
    }, 5000)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval)
    }
  }, [])
  const rotationStyle = {
    transform: `rotateY(${rotate}deg)`,
    transition: 'transform 1s ease', // Optional: Add a smooth transition effect
  }
  const ids: string[] = ['a', 'b', 'c', 'd', 'e', 'f']
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <>
      <div
        className="hidden scroll-smooth md:inline-block  mt-20 overflow-hidden"
        id="galleryHeading"
      >
        <div className="scroll-smooth">
          <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-pink gradients" data-aos="zoom-out" data-aos-delay="10" data-aos-duration="1000">
            GALLERY
          </h1>
          <div className="main-container" data-aos="zoom-in" data-aos-delay="10" data-aos-duration="1000">
            <div className="c-container z-30">
              <div className="carousel" id="carousel" style={rotationStyle}>
                {imageData?.map((elem: Images, index: number) => {
                  const date = new Date(elem.date!)
                  const formattedDate = `${date.getDate()} ${
                    monthNames[date.getMonth()]
                  }, ${date.getFullYear()}`
                  return (
                    <div
                      className={`item ${ids[index]} cursor-pointer group relative`}
                      onClick={() => {
                        console.log(elem.imageurl)
                        console.log('image pr click hua')
                        handleImageClick(index)
                        setImages(elem.imageurl)
                      }}
                      key={index}
                    >
                      <Image
                        src={elem?.mainImage!}
                        alt="images"
                        className="w-[280px] h-[300px]  rounded-[10px] object-fill cursor-pointer bg-gray-500/50 animate-pulse"
                        width={1000}
                        height={1000}
                        quality={100}
                        onLoad={(e) => {
                          e.currentTarget.classList.remove('animate-pulse')
                          e.currentTarget.classList.remove('bg-gray-500/50')
                        }}
                        // priority={true}
                      />
                      <div className="absolute w-[280px] group-hover:bg-[#00000080] rounded-[0_0_10px_10px] justify-center items-center flex flex-col pb-12  bottom-0">
                        <p className="text-white group-hover:inline-block hidden  font-medium text-[20px]">
                          {formattedDate}
                        </p>
                        <p className="text-white group-hover:inline-block hidden text-center font-semibold text-[23px]">
                          {elem.name}
                        </p>
                      </div>
                    </div>
                  )
                })}
                {/* 
                <div className="item b"></div>
                <div className="item c"></div>
                <div className="item d"></div>
                <div className="item e"></div>
                <div className="item f"></div> */}
              </div>
            </div>
            <div className="button">
              <button>
                <Image
                  src={right}
                  alt="right"
                  id="right"
                  onClick={() => clicked('r')}
                />{' '}
              </button>
              <button>
                <Image
                  src={left}
                  alt="left"
                  id="left"
                  onClick={() => clicked('l')}
                />{' '}
              </button>
            </div>
          </div>
        </div>
      </div>

      <section
        className="md:hidden min-h-[60vh] h-auto relative mt-20 pt-4"
        id="galleryHeading-md"
      >
        <h1 className="text-4xl mb-5 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-pink gradients">
          GALLERY
        </h1>
        <div className="w-full  flex flex-col justify-center items-center gap-6">
          {imageData?.map((elem: Images, index: number) => {
            const date = new Date(elem.date!)
            const formattedDate = `${date.getDate()} ${
              monthNames[date.getMonth()]
            }, ${date.getFullYear()}`
            return (
              <div
                className={`item-mobile cursor-pointer group relative`}
                onClick={() => {
                  console.log(elem.imageurl)
                  console.log('image pr click hua')
                  handleImageClick(index)
                  setImages(elem.imageurl)
                }}
                key={index}
              >
                <Image
                  src={elem?.mainImage!}
                  alt="images"
                  className="w-[280px] h-[300px]  rounded-[10px] object-fill cursor-pointer bg-gray-500/50 animate-pulse"
                  width={1000}
                  height={1000}
                  quality={100}
                  onLoad={(e) => {
                    e.currentTarget.classList.remove('animate-pulse')
                    e.currentTarget.classList.remove('bg-gray-500/50')
                  }}
                />
                {/* <div className="absolute w-[280px] group-hover:bg-[#00000080] rounded-[0_0_10px_10px] justify-center items-center flex flex-col pb-12  bottom-0">
                  <p className=" font-medium text-[20px]">{formattedDate}</p>
                  <p className="text-white group-hover:inline-block hidden text-center font-semibold text-[23px]">
                    {elem.name}
                  </p>
                </div> */}
              </div>
            )
          })}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <Slideshow
          images={images}
          startIndex={selectedImageIndex}
          onClose={closeSlideshow}
        />
      )}
    </>
  )
}

export default Coreausal

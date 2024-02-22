import React, { useState, useId, useEffect } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

interface SlideshowProps {
  images: string[]
  startIndex: number
  onClose: () => void
}

const Slideshow = ({ images, startIndex, onClose }: SlideshowProps) => {
  const imagesId = useId()
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      goToPreviousSlide()
    } else if (event.key === 'ArrowRight') {
      goToNextSlide()
    } else if (event.key === 'Escape') {
      onClose()
    }
  }
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    )

    document.getElementById(`${imagesId}-${currentIndex}`)?.scrollIntoView({
      inline: 'center',
      block: 'center',
      behavior: 'smooth',
    })
    console.log('prev')
  }
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1,
    )

    document.getElementById(`${imagesId}-${currentIndex}`)?.scrollIntoView({
      inline: 'center',
      block: 'center',
      behavior: 'smooth',
    })
    console.log('next')
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex])

  useEffect(() => {
    if (currentIndex !== null) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <>
      <div className="fixed  left-0 bottom-0 w-screen h-screen bg-black/80 backdrop-blur-md flex items-center justify-center z-50 overflow-hidden">
        <div className="relative w-full h-full p-4 lg:p-8">
          <div className="w-full h-full rounded-md flex items-center justify-center">
            <Image
              className="w-[400px] h-[400px] drop-shadow  rounded-md bg-gray-500/50 object-fill animate-pulse"
              src={images[currentIndex]}
              alt="Slideshow"
              width={400}
              height={400}
              quality={100}
              onLoad={(e) => {
                e.currentTarget.classList.remove('animate-pulse')
                e.currentTarget.classList.remove('bg-gray-500/50')
              }}
            />
          </div>

          {/* Previous Button */}
          <div className="absolute bottom-[5.5rem] left-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
            <button
              className="bg-purple bg-opacity-75 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
              onClick={goToPreviousSlide}
              disabled={currentIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          {/* Next Button */}
          <div className="absolute bottom-[5.5rem] right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
            <button
              className="bg-purple bg-opacity-75 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
              onClick={goToNextSlide}
              disabled={currentIndex === images.length - 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="fixed bottom-0 left-0 right-0 text-center ">
            <div className="bg-purple bg-opacity-75 flex justify-center">
              <div className="flex items-center gap-4 overflow-auto h-24  px-5">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    className={`w-[100px] h-[80px] rounded-md cursor-pointer object-contain  border-2  border-purple/0 transition-all 
                ${
                  index === currentIndex &&
                  'border-2 border-yellow/100 scale-110'
                }`}
                    id={`${imagesId}-${index}`}
                    height={200}
                    width={200}
                    quality={50}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={(e) => {
                      e.currentTarget.scrollIntoView({
                        inline: 'center',
                        block: 'center',
                        behavior: 'smooth',
                      })
                      setCurrentIndex(index)
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-[5rem] right-4 sm:top-[5rem] text-white bg-purple-off-white rounded-full p-1.5 bg-opacity-0 hover:bg-opacity-10"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Slideshow

'use client'

import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getGalleryImages } from '@/app/services/user.services'
import Image from 'next/image'
import Slideshow from '../slideshow'

type Props = {}

const MasonryGridGallery = ({}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  )

  const params = useSearchParams()

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeSlideshow = () => {
    setSelectedImageIndex(null)
  }

  const fetchImages = async () => {
    let search = params.get('search')

    if (!search) search = ''

    setIsLoading(true)
    const { err, res } = await getGalleryImages(search)
    setIsLoading(false)

    if (err) return
    const json = await res?.json()
    if (!json) return
    console.log(json.data)
    const images = json.data.map((elem: any) => {
      return elem.imageurl
    })
    const flatArray = images.reduce(
      (acc: any, curr: any) => acc.concat(curr),
      [],
    )
    setData(flatArray)
  }

  useEffect(() => {
    fetchImages()
  }, [params])

  return (
    <>
      <div className="px-4 py-3 ">
        {isLoading ? (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3  xl:grid-cols-5 ">
            {new Array(10).fill(null).map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="h-48 w-full rounded-md bg-gray-200 animate-pulse"
                ></div>
              )
            })}
          </div>
        ) : data.length > 0 ? (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 640: 3, 1024: 4, 1279: 5 }}
          >
            <Masonry gutter="10px">
              {data.map((item: any, index: number) => {
                return (
                  <Image
                    key={index}
                    src={item}
                    className="w-full border  max-w-xs bg-gray-200 animate-pulse cursor-zoom-in
                    rounded-md overflow-hidden hover:brightness-90 transition-all duration-300"
                    alt={item}
                    width={400}
                    height={400}
                    quality={80}
                    onClick={() => handleImageClick(index)}
                    onLoad={(e) => {
                      e.currentTarget.classList.remove('animate-pulse')
                      e.currentTarget.classList.remove('bg-gray-200')
                    }}
                  />
                )
              })}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <p className="font-medium text-paragraph text-center">No Images!</p>
        )}
      </div>

      {selectedImageIndex !== null && (
        <Slideshow
          images={data}
          startIndex={selectedImageIndex}
          onClose={closeSlideshow}
        />
      )}
    </>
  )
}

export default MasonryGridGallery

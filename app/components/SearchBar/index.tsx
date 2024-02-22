'use client'

import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from '@/app/img/icons/search'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getGalleryImages } from '@/app/services/user.services'
import { isEmptyField } from '@/app/utlis'
import CloseIcon from '@/app/img/icons/close'

type Props = {}

const GallerySearchBar = ({}: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const [data, setData] = useState([])
  const [featuredTags, setFeaturedTags] = useState([])
  const [inputData, setInputData] = useState('')
  const [open, setOpen] = useState(false)

  const params = useSearchParams()
  let search = params.get('search')

  const handleInputChange = (value: any) => {
    setInputData(value)
    // if (!isEmptyField(value)) fetchData(value)
  }

  const handleSubmit = async (name: any) => {
    if (name === 'featured' || name === '') return router.push(pathname)
    router.push(`${pathname}/?search=${name}`)
  }

  /** Handle User Search   */
  //   const fetchData = async (inputData: any) => {
  //     const { res, err } = await getGalleryImagesTags(inputData)
  //     if (err || !res || !res.ok) throw new Error('Fetch failed!')
  //     const { data } = await res.json()
  //     setData(data)
  //   }

  /** Handle User Search   */
  const fetchFeaturedTags = async () => {
    const response = await fetch('/api/admin/gallery', {
      method: 'GET',
    })
    const { data } = await response.json()

    setFeaturedTags(data.map((tag: any) => tag.name))
  }

  const openDropDown = () => setOpen(true)

  const handleCloseDropDown = () => {
    setTimeout(() => {
      setOpen(false)
    }, 300)
  }

  useEffect(() => {
    if (search) setInputData(search)
    else {
      setInputData('')
    }
    setData([])
  }, [pathname, search])

  useEffect(() => {
    fetchFeaturedTags()
  }, [])

  return (
    <>
      <h1 className="text-[48px] font-[700] gradients text-center mt-[6rem]" data-aos="fade-in" data-aos-delay="10" data-aos-duration="1000">
        Gallery
      </h1>
      <section className="z-10 px-1 pt-4 xl:pt-3 pb-3 bg-gray-lighter  border-b border-b-paragraph-light/10 rounded-t-md shadow-sm ">
        <div className="w-max mx-auto relative flex flex-col gap-3 ">
          <div className="w-max mx-auto relative ">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // handleSubmit(inputData)
              }}
              data-aos="zoom-in" data-aos-delay="10" data-aos-duration="1000"
            >
                 
              <div className="rounded-full bg-gradient-to-r from-pink to-main p-0.5 my-5">
                <input
                  type="search"
                  className="h-10  w-72 lg:w-[500px] px-3 rounded-full text-white focus:outline-none  bg-black"
                  placeholder="Search here..."
                  onChange={(e) => handleInputChange(e.target.value)}
                  value={inputData}
                  onFocus={openDropDown}
                  onBlur={handleCloseDropDown}
                />
              </div>
              {search ? (
                <button
                  onClick={() => router.push(pathname)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer p-1.5 rounded-full z-30"
                >
                  <CloseIcon />
                </button>
              ) : (
                <button
                  type="submit"
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer p-1.5 rounded-full"
                >
                  <SearchIcon />
                </button>
              )}
            </form>
          </div>

          {open && (
            <div className="min-h-[10px]  w-72 lg:w-[500px]  border-b border-b-line-separator  rounded-lg bg-black absolute top-[4rem] gap-3 flex flex-col p-1">
              {featuredTags.map((name: string, index: number) => (
                <>
                  <p
                    key={index}
                    className="hover:border-solid hover:border-pink hover:border-[1px] p-3 text-white  rounded-lg cursor-pointer"
                    onClick={() => handleSubmit(name)}
                  >
                    {name}
                  </p>
                </>
              ))}
            </div>
          )}
        </div>
        {/* Featured Tags */}
        <div className="flex overflow-auto gap-2 sm:gap-3 justify-center mt-5 mb-12" data-aos="zoom-out" data-aos-delay="10" data-aos-duration="1000">
          {featuredTags.map((name: string, index: number) => {
            return (
              <div
                key={index}
                className="rounded-full ml-1 bg-gradient-to-r from-pink to-main p-0.5 my-5"
              >
                <p
                  className={`px-6 text-[18px] text-center text-white w-full h-full flex justify-center items-center py-1 cursor-pointer bg-black rounded-full font-medium `}
                  onClick={() =>
                    handleSubmit(search === name ? 'featured' : name)
                  }
                >
                  {name}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default GallerySearchBar

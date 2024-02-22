'use client'
import React from 'react'
import styles from './styles.module.css'
import GallerySearchBar from '@/app/components/SearchBar'
import MasonryGridGallery from '@/app/components/MasonryGrid'

import AOS from 'aos'
import 'aos/dist/aos.css'
// -- ANIMATION ---
import { useEffect } from 'react'
// AOS.init();

type Props = {}

const Gallery = ({}: Props) => {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main className="w-full mt-12">
        {/* Search bar */}
        <GallerySearchBar />

        {/* Photos */}
        <MasonryGridGallery />
      </main>
    </>
  )
}

export default Gallery

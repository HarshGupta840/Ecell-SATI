'use client'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Recrutement from './recrutement'
import Collborate from './collaborate'
import Gallery from './gallery'
import Upcommingevents from './events'
import { RootState } from '@/redux/store'
import { closeModal } from '@/redux/slices/modal'
import Comming from './comming'

type Props = {}

const Modalmanager = ({}: Props) => {
  const dispatch = useDispatch()
  const { activeModal } = useSelector((state: RootState) => state.modal)
  function handleClose() {
    dispatch(closeModal())
  }
  useEffect(() => {
    if (activeModal !== null) document.body.style.overflow = 'hidden'
    else
      setTimeout(() => {
        document.body.style.overflow = 'auto'
      }, 500)
  }, [activeModal])
  return (
    <>
      <section className="modal-manager">
        {activeModal !== null && (
          <div className="fixed top-0 left-0 w-full h-auto md:h-full z-[50] grid justify-center items-center overflow-y-auto p-[40px_0] bg-[#00000099]">
            <main className="relative">
              {activeModal === 'get-recruted' && <Recrutement />}
              {activeModal === 'collaborate' && <Collborate />}
              {activeModal === 'events' && <Upcommingevents />}
              {activeModal === 'gallery' && <Gallery />}
              {activeModal === 'comming' && <Comming />}

              <span
                className="absolute top-0 right-[-2rem]  mt-10  text-main cursor-pointer w-[2rem] grid items-center rounded-full h-[2rem]"
                onClick={() => dispatch(closeModal())}
              >
                <AiOutlineCloseCircle />
              </span>
            </main>
          </div>
        )}
      </section>
    </>
  )
}

export default Modalmanager

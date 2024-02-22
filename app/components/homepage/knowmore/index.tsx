import React from 'react'
import Image, { StaticImageData } from 'next/image'
import gallery from '@/app/img/Gallery.png'
import management from '@/app/img/Management.png'
import event from '@/app/img/Event.png'
import collabration from '@/app/img/Collaboration.png'
import { useDispatch } from 'react-redux'
import { ModalType, openModal } from '@/redux/slices/modal'

type Props = {}

const Knowmore = ({}: Props) => {
  return (
    <>
      <section
        className="h-[100vh] bg-dark pt-[15vh] relative knowMoreBg mb-10 md:mb-0 overflow-hidden"
        id="know-more"
      >
        <div className="md:w-[95vw] md:h-[60vh] w-12/12 h-[50vh] rounded-tr-full  rounded-br-full bg-none md:bg-gradient-to-r from-pink via-red-500 to-yellow-500 p-0.5">
          <div className="md:bg-[rgba(0,0,0,1)] bg-none p-1 rounded-tr-full rounded-br-full w-full h-full backdrop-blur-md flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center pl-[2vw]">
            <div className=" w-full md:bg-none bg-gradient-to-r from-pink via-red-500 to-yellow-500 p-0.5 rounded-tr-full  rounded-br-full">
              <div className="bg-[rgba(0,0,0,1)] rounded-tr-full rounded-br-full px-4 py-8 md:p-8">
                <h1
                  className="lg:text-4xl text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-pink"
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-duration="500"
                >
                  Want to know more?
                </h1>
                <p
                  className="lg:pr-20 md:pr-8 pr-2 pt-6 text-gray-400 text-[14px] md:text-[16px] xl:text-[18px]"
                  data-aos="zoom-out-up"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                >
                  Explore the world of entrepreneurship with our comprehensive
                  &quot;Want to Know More&quot; section. Stay informed about our
                  upcoming events, gain insights from our gallery showcasing
                  memorable moments,find valuable recruitment opportunities and
                  find potential collaboration.
                  <br />
                  Your gateway to the professional entrepreneurial landscape
                  begins here, where possibilities are endless, and
                  opportunities abound.
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col gap-6 md:gap-0  h-[75%] justify-between mr-[5%] ml-[8%]">
              <div className="flex gap-6" id="events">
                <Block
                  modalType={'comming'}
                  image={event}
                  title={'Upcoming Event'}
                  classH={'bgCards1'}
                />
                <Block
                  image={gallery}
                  title={'Gallery'}
                  classH={'bgCards2'}
                  modalType={'events'}
                />
              </div>
              <div className="flex  gap-6 ml-8">
                <Block
                  image={management}
                  modalType={'comming'}
                  title={'Get Recruited'}
                  classH={'bgCards3'}
                />
                <Block
                  image={collabration}
                  modalType={'comming'}
                  title={'Collaboration'}
                  classH={'bgCards4'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

type AppOwnProps = {
  image: StaticImageData
  title: string
  classH: string
  modalType: ModalType
}
const Block = ({ image, title, classH, modalType }: AppOwnProps) => {
  const dispatch = useDispatch()
  return (
    <div
      className={`${classH} md:h-[15vh] md:w-[20vw] lg:h-[20vh] lg:w-[30vh] h-[13vh] w-[16vh] text-gray-300 rounded-lg cursor-pointer`}
      onClick={() => {
        if (title == 'Gallery' && window.innerWidth > 768) {
          const element = document.getElementById('galleryHeading')
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else if (title == 'Gallery' && window.innerWidth < 768) {
          const element = document.getElementById('galleryHeading-md')
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else {
          dispatch(
            openModal({
              type: modalType,
            }),
          )
        }
      }}
    >
      <div
        className="backdrop-blur-3xl w-full h-full flex items-center justify-center flex-col rounded-lg border border-gray-600"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="1000"
      >
        <Image src={image} alt={title} className="w-2/6" />
        <p className="text-center">{title}</p>
      </div>
    </div>
  )
}
export default Knowmore

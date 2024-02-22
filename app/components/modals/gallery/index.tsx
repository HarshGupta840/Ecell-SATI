import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import Image from 'next/image'
import { postUser } from '@/app/services/user.services'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteOutline } from 'react-icons/md'
import { RootState } from '@/redux/store'

type Props = {}
interface Inputvals {
  name: string
  date: string
}
const Gallery = ({}: Props) => {
  const { data } = useSelector((state: RootState) => state.modal)
  const [images, setImages] = useState<File[]>([])
  const [imagesurl, setImagesurl] = useState<string[]>([])
  const [mainImages, setMainImage] = useState<File | null>(null)
  const [select, setselect] = useState<boolean>(false)
  const [inputData, setInputData] = useState<Inputvals>({
    name: '',
    date: '',
  })

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setselect(true)
    const selectedImages = Array.from(e.target.files || [])
    setImages([...images, ...selectedImages])
    const imageurls = selectedImages.map((elem) => {
      const images = URL.createObjectURL(elem)
      return images
    }) as string[]
    setImagesurl([...imagesurl!, ...imageurls!])
    console.log(...imageurls)
  }
  const handleMainImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files?.[0]
    if (selectedImages) {
      setMainImage(selectedImages)
    }
  }
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputData((prev: Inputvals) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  const upload = async (e: FormEvent) => {
    e.preventDefault()
    console.log('upload called')
    try {
      const uploadedImages = await Promise.all(
        images.map(async (file) => {
          const data = new FormData()
          data.append('file', file)
          data.append('upload_preset', 'ecellphotos')
          data.append('cloud_name', 'dygekgnhx')

          const response = await fetch(
            '  https://api.cloudinary.com/v1_1/dygekgnhx/image/upload',
            {
              method: 'post',
              body: data,
            },
          )
          const respons = await response.json()
          if (!respons) {
            console.log('Err')
          }
          return respons.secure_url
        }),
      )
      const data = new FormData()
      data.append('file', mainImages!)
      data.append('upload_preset', 'ecellphotos')
      data.append('cloud_name', 'dygekgnhx')

      const response = await fetch(
        '  https://api.cloudinary.com/v1_1/dygekgnhx/image/upload',
        {
          method: 'post',
          body: data,
        },
      )
      const respons = await response.json()
      const imageData = {
        name: inputData?.name,
        date: new Date(inputData.date),
        mainImage: respons.secure_url,
        imageurl: uploadedImages,
      }
      const { res, err } = await postUser(imageData, '/api/admin/gallery')
      if (err || !res?.ok) {
        console.log('Err')
      }
      // Clear the selected files
    } catch (error) {
      console.error('Error uploading images:', error)
    }
  }
  //to deletethe image
  const deleteImage = (image: string, index: number) => {
    console.log(image)
    if (image.includes('blob')) {
      console.log('haim')
      return
    }
    try {
    } catch (error) {
      console.error('Error uploading images:', error)
    }
  }
  useEffect(() => {
    if (data) {
      setInputData((prev: Inputvals) => {
        const str = data.date.split('T')[0]
        return {
          ...prev,
          date: str,
          name: data.name,
        }
      })
      setImagesurl(data.imageurl)
    }
  }, [])
  return (
    <>
      <section className="w-[65vw] rounded-md h-auto min-h-[80vh] mt-10 mx-auto bg-white">
        <form onSubmit={upload} className="px-8 py-6 flex flex-col gap-8">
          <input
            className="h-[60px] w-[100%] border-skyblue border-solid border-[3px]   rounded-md pl-4 bg-black text-[#D9D9D9] text-[18px] font-[300] focus:outline-none"
            type="text"
            placeholder="Event Name"
            name="name"
            value={inputData.name}
            required
            onChange={change}
          />
          <div className="grid grid-cols-3 gap-5">
            <input
              type="date"
              name="date"
              value={inputData.date}
              onChange={change}
              required
              id=""
              className="focus:outline-none h-[40px] text-skyblue border-skyblue px-4 border-solid border-[3px]"
            />
            <label
              htmlFor="file"
              className="bg-gradient-to-r h-[40px] flex items-center justify-center border-skyblue cursor-pointer border-solid border-[3px] from-skyblue  to-pink bg-clip-text text-center text-transparent font-bold text-[20px] "
            >
              Upload
            </label>
            <label
              htmlFor="mainfile"
              className="bg-gradient-to-r h-[40px] flex items-center justify-center border-skyblue cursor-pointer border-solid border-[3px] from-skyblue  to-pink bg-clip-text text-center text-transparent font-bold text-[20px] "
            >
              Upload Main Image
            </label>
            <input
              type="file"
              required
              multiple
              name=""
              id="file"
              className="hidden"
              onChange={handleImageUpload}
            />
            <input
              type="file"
              required
              multiple
              name=""
              id="mainfile"
              className="hidden"
              onChange={handleMainImageUpload}
            />
          </div>
          <section className="grid grid-cols-3 justify-items-center items-center gap-5">
            {imagesurl &&
              imagesurl.map((image, index) => (
                <div key={index} className="w-[220px] h-[220px] items-center">
                  <label
                    className="img-upload-label"
                    onClick={() => deleteImage(image, index)}
                  >
                    <Image
                      className="preview-img"
                      src={image}
                      alt=""
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <div>
                      <Image src={MdDeleteOutline} alt="svg" />
                      <p>Delete Image</p>
                    </div>
                  </label>
                  {/* <Image
                    key={index}
                    src={image}
                    className={`w-full h-full rounded-md cursor-pointer object-contain border-2  border-purple/0 transition-all`}
                    height={50}
                    width={150}
                    quality={50}
                    alt={`Image ${index}`}
                  /> */}
                </div>
              ))}
          </section>
          {select && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[300px] h-[40px] rounded flex items-center justify-center bg-yellow-300"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </section>
    </>
  )
}

export default Gallery

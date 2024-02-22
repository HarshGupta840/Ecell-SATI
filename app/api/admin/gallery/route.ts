import { connect } from '@/app/utlis/dbConfig'
import Gallery from '@/app/utlis/model/gallerySchema'
import { NextRequest, NextResponse } from 'next/server'
import { string, z } from 'zod'

export async function POST(req: NextRequest) {
  connect()
  try {
    const reqBody = await req.json()
    const schema = z.object({
      name: z.string().min(1), // Ensure it's a non-empty string
      date: z.string().min(1), // Ensure it's a non-empty string
      mainImage: z.string().min(1), // Ensure it's a non-empty string
      imageurl: z.array(z.string()), // Ensure it's an array of strings
    })
    const response = schema.parse(reqBody)
    const image = new Gallery(reqBody)
    const result = await image.save()

    // console.log(response)

    return NextResponse.json(
      {
        data: result,
        message: 'done',
        success: true,
      },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
export async function GET(req: NextRequest) {
  connect()
  const url = new URL(req.url)
  const search = url.searchParams.get('search')

  try {
    var result
    if (search) {
      result = await Gallery.find({ name: search })
    } else {
      result = await Gallery.find()
    }
    // console.log(response)

    return NextResponse.json(
      {
        data: result,
        message: 'done',
        success: true,
      },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

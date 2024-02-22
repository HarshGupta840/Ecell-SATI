import { connect } from '@/app/utlis/dbConfig'
import Gallery from '@/app/utlis/model/gallerySchema'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  connect()
  try {
    const reqBody = await req.json()
    let { name, date, images } = reqBody

    const gallery = new Gallery({
      name,
      date,
      images,
    })

    gallery
      .save()
      .then((res: any) => {
        return NextResponse.json(
          { success: true, message: 'Saved success' },
          { status: 200 },
        )
      })
      .catch((err: any) => {
        return NextResponse.json({ error: err.message }, { status: 500 })
      })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  connect()
  try {
    const reqBody = await req.json()
    let { id, name, date, images } = reqBody

    const gallery = await Gallery.findById(id)

    if (!gallery) {
      return NextResponse.json(
        { success: false, message: 'Event not found' },
        { status: 404 },
      )
    }

    await Gallery.updateOne({ _id: id }, { name, date, images })
      .then((res: any) => {
        return NextResponse.json(
          { success: true, message: 'Update success' },
          { status: 200 },
        )
      })
      .catch((err: any) => {
        return NextResponse.json({ error: err.message }, { status: 500 })
      })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  connect()
  try {
    const gallery = await Gallery.find()

    return NextResponse.json(
      { success: true, message: 'Get request success', data: gallery },
      { status: 200 },
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

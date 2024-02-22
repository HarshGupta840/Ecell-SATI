import { connect } from '@/app/utlis/dbConfig'
import Blogs from '@/app/utlis/model/blogSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  connect()
  try {
    const reqBody = await req.json()
    let { title, desc, date, img } = reqBody

    const blog = new Blogs({
      title,
      desc,
      date,
      img,
    })

    blog
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
    let { id, title, desc, date, img } = reqBody

    const blog = await Blogs.findById(id)

    if (!blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 },
      )
    }

    await Blogs.updateOne({ _id: id }, { title, desc, date, img })
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
    const blogs = await Blogs.find()

    return NextResponse.json(
      { success: true, message: 'Get request success', data: blogs },
      { status: 200 },
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

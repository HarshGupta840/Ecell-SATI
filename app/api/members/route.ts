import { connect } from '@/app/utlis/dbConfig'
import Member from '@/app/utlis/model/membersSchema'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // connect()
  try {
    const reqBody = await req.json()
    let { name, position, insta_id, linkedin_id, photo, designation } = reqBody

    const member = new Member({
      name,
      position,
      insta_id,
      linkedin_id,
      photo,
      designation,
    })

    member
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
    let { id, name, position, insta_id, linkedin_id, photo } = reqBody

    const member = await Member.findById(id)

    if (!member) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 },
      )
    }

    await Member.updateOne(
      { _id: id },
      { name, position, insta_id, linkedin_id, photo },
    )
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
    const members = await Member.find()

    return NextResponse.json(
      { success: true, message: 'Get request success', data: members },
      { status: 200 },
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import Suscribe from '@/app/utlis/model/sucribeSchema'
import { z } from 'zod'
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const schema = z.object({
      email: z.string().min(1), // Ensure it's a non-empty string
    })
    const response = schema.parse(body)
    const result = await Suscribe.findOne({ email: body.email })
    if (result) {
      return NextResponse.json(
        {
          message: 'Existing User',
          success: true,
        },
        { status: 200 },
      )
    }
    const email = new Suscribe(body)
    const res = await email.save()
    console.log(body)
    return NextResponse.json(
      {
        message: 'Suscribed',
        success: true,
      },
      { status: 200 },
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const res = await Suscribe.find()
    return NextResponse.json(
      {
        data: res,
        message: 'done',
        success: true,
      },
      { status: 200 },
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

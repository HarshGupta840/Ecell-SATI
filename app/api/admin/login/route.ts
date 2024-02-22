import { connect } from '@/app/utlis/dbConfig'
import AdminUser from '@/app/utlis/model/loginSchema'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest) {
  connect()
  try {
    const reqBody = await req.json()
    let { email, password } = reqBody

    const user = await AdminUser.findOne({ email })

    if (!user) {
      return NextResponse.json(
        {
          message: 'Credentials are not true',
          success: false,
        },
        { status: 404 },
      )
    }

    let comparePassword = await bcrypt.compare(password, user?.password)

    if (!comparePassword) {
      return NextResponse.json(
        {
          message: 'Credentials are not true',
          success: false,
        },
        { status: 404 },
      )
    }

    let tokenData = { id: user?._id }

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY!, {
      expiresIn: '1d',
    })

    const response = NextResponse.json(
      { message: 'Login success', success: true },
      { status: 200 },
    )

    response.cookies.set('token', token, {
      httpOnly: true,
    })

    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

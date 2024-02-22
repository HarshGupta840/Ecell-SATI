import { connect } from '@/app/utlis/dbConfig'
import AdminUser from '@/app/utlis/model/loginSchema'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  connect()
  try {
    const { email } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    })

    let data = await AdminUser.findOne({ email })
    if (data) {
      const jwtToken = jwt.sign(
        {
          user: data._id,
        },
        process.env.SECRET_KEY!,
        {
          expiresIn: '1hr',
        },
      )

      const uri = `${process.env.BASE_URL}/admin/password-reset/${data._id}/${jwtToken}`

      const result = await transporter.sendMail({
        to: email,
        subject: 'Bye, bye, old password! You’re about to be reset.',
        text: 'Click here to reset the password :- ' + uri,
      })

      if (result.accepted.includes(email)) {
        return NextResponse.json(
          {
            message:
              'Password reset link sent to your email account. If not received check spam folder once.',
          },
          { status: 200 },
        )
      }
    } else {
      return NextResponse.json(
        {
          message: 'Credentials are not true',
          success: false,
        },
        { status: 404 },
      )
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

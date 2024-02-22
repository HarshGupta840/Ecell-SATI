import { connect } from '@/app/utlis/dbConfig'
import AdminUser from '@/app/utlis/model/loginSchema'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest) {
  connect()
  try {
    const reqBody = await req.json()
    let { name, email, password } = reqBody

    let salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, salt)
    const user = new AdminUser({ name, email, password })
    await user.save()
    return NextResponse.json(
      { result: 'User saved success', success: true },
      { status: 200 },
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

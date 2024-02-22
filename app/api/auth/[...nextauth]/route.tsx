import NextAuth, { Session, SessionStrategy } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { redirect } from 'next/dist/server/api-utils'
import { connect } from '@/app/utlis/dbConfig'
import AdminUser from '@/app/utlis/model/loginSchema'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        console.log(credentials)
        const email = credentials?.email!
        const password = credentials?.password!
        // let user: any
        // try {
        //   user = await AdminUser.findOne({ email })
        //   if (!user) {
        //     //do
        //     throw new Error('Wrong credentisld hain')
        //   }

        //   let comparePassword = await bcrypt.compare(password, user?.password)

        //   if (!comparePassword) {
        //     //do something
        //     throw new Error('Wrong credentisld')
        //   }

        //   let tokenData = { id: user?._id }

        //   const token = await jwt.sign(tokenData, process.env.SECRET_KEY!, {
        //     expiresIn: '1d',
        //   })
        // } catch (error: any) {
        //   console.log('error')
        //   throw new Error('Wrong credentisld erroe hain')
        // }

        const res = await fetch(`http://localhost:3000/api/admin/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })
        let user = await res.json()
        console.log(user)
        if (user.success === true) {
          return user
        }
        return null
      },
    }),
  ],
  debug: true,
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 24 * 60 * 60,
  },

  callbacks: {
    jwt: async ({ token, user }: any) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }: { session: Session; token: any }) => {
      session.user = token.user // Setting token in session
      return session
    },
  },
  pages: {
    signIn: '/admin',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

const login = async (email: string, password: string) => {
  try {
    const user = await AdminUser.findOne({ email })

    if (!user) {
      //do
    }

    let comparePassword = await bcrypt.compare(password, user?.password)

    if (!comparePassword) {
      //do something
      throw new Error('Wrong credentisld')
    }

    let tokenData = { id: user?._id }

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY!, {
      expiresIn: '1d',
    })

    // const response = NextResponse.json(
    //   { message: 'Login success', success: true },
    //   { status: 200 },
    // )

    // response.cookies.set('token', token, {
    //   httpOnly: true,
    // })

    return token
  } catch (error: any) {
    throw new Error('Wrong credentisld')
    return
  }
}

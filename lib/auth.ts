import { NextAuth } from '@auth/nextjs'
import Google from '@auth/core/providers/google'
import { connect, User } from './mongodb'

export const runtime = 'edge'

const { handlers, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // allow authorization check (required by type signature)
    async authorized() {
      return true
    },
    async signIn({ user }) {
      // persist basic user record in MongoDB when they sign in
      try {
        await connect()
        if (user?.email) {
          await User.findOneAndUpdate(
            { email: user.email },
            { $set: { email: user.email, name: user.name || undefined, image: user.image || undefined } },
            { upsert: true }
          ).exec()
        }
      } catch (err) {
        // don't block sign-in on DB errors; log in server logs
        console.error('Error upserting user on signIn callback', err)
      }
      return true
    }
  }
} as any)

export { handlers }
export default auth

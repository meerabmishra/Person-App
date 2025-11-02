import { NextAuth } from '@auth/nextjs'
import Google from '@auth/core/providers/google'
import { connect, User } from './mongodb'

export const runtime = 'edge'

// Get the deployment URL for auth configuration
const deploymentUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}`
  : process.env.AUTH_URL || 'http://localhost:3000'

const { handlers, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "online"
        }
      }
    })
  ],
  cookies: {
    pkceCodeVerifier: {
      name: 'next-auth.pkce.code_verifier',
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  },
  callbacks: {
    async authorized() {
      return true // Allow all authorized Google users
    },
    async signIn({ user, account }) {
      // Accept any valid Google account
      if (account?.provider === 'google' && user?.email) {
        try {
          await connect()
          // Create or update user in database
          await User.findOneAndUpdate(
            { email: user.email },
            { 
              $set: {
                email: user.email,
                name: user.name || undefined,
                image: user.image || undefined,
                lastLogin: new Date()
              }
            },
            { upsert: true }
          ).exec()
        } catch (err) {
          console.error('Error upserting user on signIn callback', err)
        }
        return true
      }
      return true
    }
  }
} as any)

export { handlers }
export default auth

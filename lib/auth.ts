import { getServerSession } from 'next-auth'
import { cookies } from 'next/headers'

export async function getSessionServerComponent() {
  const session = await getServerSession()
  return session
}

export async function getSession() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('next-auth.session-token')
  if (!sessionToken) return null
  
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
      headers: {
        cookie: `next-auth.session-token=${sessionToken.value}`
      }
    })
    
    const session = await response.json()
    return session
  } catch (error) {
    console.error('Error getting session:', error)
    return null
  }
}

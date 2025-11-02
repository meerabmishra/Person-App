import { cookies } from 'next/headers'

/**
 * Determine origin to call local /api/auth/session. Prefer in-order:
 * 1) If request provided, use its Host header (keeps correct port)
 * 2) NEXTAUTH_URL env (explicit)
 * 3) NEXT_PUBLIC_VERCEL_URL (production)
 * 4) process.env.PORT or default localhost:3000
 */
function deriveOrigin(req?: Request) {
  try {
    if (req) {
      const host = req.headers.get('host')
      if (host) {
        const proto = req.headers.get('x-forwarded-proto') || 'http'
        return `${proto}://${host}`
      }
    }

    // For local development, always use localhost
    if (process.env.NODE_ENV === 'development') return 'http://localhost:3000'
    // For production, use NEXTAUTH_URL
    if (process.env.NEXTAUTH_URL) return process.env.NEXTAUTH_URL.replace(/\/$/, '')
    const port = process.env.PORT || '3000'
    return `http://localhost:${port}`
  } catch (e) {
    return 'http://localhost:3000'
  }
}

export async function getSessionForRequest(req?: Request) {
  const origin = deriveOrigin(req)
  // get cookie header from incoming Request (API route) or from next/headers (server component)
  const cookie = req ? req.headers.get('cookie') || '' : cookies().toString()

  try {
    const res = await fetch(`${origin}/api/auth/session`, {
      headers: { cookie },
      cache: 'no-store'
    })

    if (!res.ok) return null
    try {
      return await res.json()
    } catch (e) {
      return null
    }
  } catch (err) {
    // network error (for example during build or when local server isn't reachable)
    return null
  }
}

export async function getSessionServerComponent() {
  return getSessionForRequest()
}

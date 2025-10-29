export async function GET() {
  // Do NOT return secret values. Only return presence/absence (booleans).
  const hasGoogleClientId = !!process.env.GOOGLE_CLIENT_ID
  const hasGoogleClientSecret = !!process.env.GOOGLE_CLIENT_SECRET
  const hasNextAuthSecret = !!process.env.NEXTAUTH_SECRET
  const hasDatabaseUrl = !!process.env.DATABASE_URL
  const hasVercelUrl = !!process.env.NEXT_PUBLIC_VERCEL_URL

  return new Response(
    JSON.stringify({ hasGoogleClientId, hasGoogleClientSecret, hasNextAuthSecret, hasDatabaseUrl, hasVercelUrl }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  )
}

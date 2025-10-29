'use client';

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch('/api/auth/session')
      if (res.ok) {
        const data = await res.json()
        setSession(data)
      }
    }
    fetchSession()
  }, [])

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', backgroundColor: '#e3f2fd', borderBottom: '1px solid #ddd' }}>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link href="/">Home</Link>
        <Link href="/persons">People</Link>
        <Link href="/about">About</Link>
      </div>
      <div>
        {session ? (
          <div>
            Hello, {session.user?.name || session.user?.email}! ({session.user?.name?.[0] || '?'}){' '}
            <a href="/api/auth/signout" style={{ marginLeft: 12 }}>Logout</a>
          </div>
        ) : (
          <a href="/api/auth/signin">Login</a>
        )}
      </div>
    </nav>
  )
}

'use client';

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Nav() {
  const { data: session, status } = useSession()

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', backgroundColor: '#e3f2fd', borderBottom: '1px solid #ddd' }}>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link href="/">Home</Link>
        <Link href="/persons">People</Link>
        <Link href="/about">About</Link>
      </div>
      <div>
        {status === 'loading' ? (
          <span>Loading...</span>
        ) : session ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>Hello, {session.user?.name || session.user?.email}!</span>
            <button 
              onClick={() => signOut({ callbackUrl: '/' })}
              style={{ 
                padding: '6px 12px', 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/auth/signin" style={{ 
            padding: '6px 12px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px' 
          }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

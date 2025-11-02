'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function SignIn() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const getErrorMessage = (error: string) => {
    switch (error) {
      case 'OAuthAccountNotLinked':
        return 'To confirm your identity, sign in with the same account you used originally.'
      case 'OAuthSignin':
      case 'OAuthCallback':
        return 'Error connecting to the authentication provider. Please try again.'
      case 'AccessDenied':
        return 'Access was denied. Please try again.'
      case 'Configuration':
        return 'There is a problem with the server configuration.'
      default:
        return error ? `Authentication error: ${error}` : null
    }
  }

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '450px', 
        width: '100%',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '48px 32px 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 24px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{ width: '48px', height: '48px', color: 'white' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: '#1a202c',
              marginBottom: '8px',
              lineHeight: '1.2'
            }}>
              Welcome Back
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#718096',
              marginBottom: '0'
            }}>
              Sign in to access your Person App
            </p>
          </div>
          
          {error && (
            <div style={{
              marginBottom: '24px',
              padding: '16px',
              background: '#FEE2E2',
              borderLeft: '4px solid #EF4444',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <svg style={{ width: '20px', height: '20px', color: '#DC2626', flexShrink: 0, marginRight: '12px' }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p style={{ fontSize: '14px', color: '#991B1B', margin: 0, lineHeight: '1.5' }}>
                  {getErrorMessage(error)}
                </p>
              </div>
            </div>
          )}

          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              background: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#F9FAFB'
              e.currentTarget.style.borderColor = '#D1D5DB'
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.borderColor = '#E5E7EB'
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
        
        <div style={{ 
          padding: '24px 32px', 
          background: '#F9FAFB',
          borderTop: '1px solid #E5E7EB',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
            <svg style={{ width: '16px', height: '16px', color: '#9CA3AF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
              Protected by OAuth 2.0
            </p>
          </div>
          <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>
            By signing in, you agree to our <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>Terms</a> and <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}
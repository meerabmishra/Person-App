import './globals.css'
import Nav from '../components/Nav'
import { Providers } from './providers'

export const metadata = {
  title: 'Person App (OAuth Secured)',
  description: 'OAuth-secured CRUD application with Google authentication'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          <main style={{ padding: 20 }}>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

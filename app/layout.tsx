import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Person App (OAuth Secured)'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  )
}

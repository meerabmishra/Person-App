import { getSessionServerComponent } from '../../lib/session'
import Link from 'next/link'
import { connect, User, Person } from '../../lib/mongodb'

export default async function PersonsPage() {
  const session = await getSessionServerComponent()
  if (!session) {
    return (
      <div>
        <h2>People</h2>
        <p>You must be signed in to view people. <a href="/api/auth/signin">Sign in</a></p>
      </div>
    )
  }

  const userEmail = session.user?.email
  await connect()
  const user = await User.findOne({ email: userEmail }).exec()
  const persons = user ? await Person.find({ ownerId: user._id }).lean().exec() : []

  return (
    <div style={{ padding: '50px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0077b6' }}>People</h1>
      <p style={{ marginBottom: '20px' }}>
        Signed in as <strong>{session.user?.email}</strong> — <a href="/api/auth/signout" style={{ color: '#0077b6' }}>Sign out</a>
      </p>
      <Link href="/persons/new" style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#0077b6',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
        marginBottom: '30px'
      }}>Add New Person</Link>
      <div style={{ 
        display: 'grid', 
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {persons.map((p: any) => (
          <div key={p._id} style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{p.name}</h3>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>
                {p.email && <div>Email: {p.email}</div>}
                {p.phone && <div>Phone: {p.phone}</div>}
              </div>
            </div>
            <Link href={`/persons/${p._id}/edit`} style={{
              padding: '8px 16px',
              backgroundColor: '#e9ecef',
              color: '#495057',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.9rem'
            }}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

import { getSessionServerComponent } from '../../../lib/session'
import { connect } from '../../../lib/mongodb'

export default async function NewPersonPage() {
  const session = await getSessionServerComponent()
  if (!session) return <div>Please sign in to add a person.</div>

  await connect()

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0077b6' }}>Add New Person</h1>
      <form method="post" action="/api/persons" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            name="name"
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            name="email"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (123) 456-7890"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Notes</label>
          <textarea
            name="notes"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#0077b6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Create Person
        </button>
      </form>
    </div>
  )
}

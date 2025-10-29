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
    <div>
      <h2>People</h2>
      <p>Signed in as {session.user?.email} — <a href="/api/auth/signout">Sign out</a></p>
      <Link href="/persons/new">Add person</Link>
      <ul>
        {persons.map((p: any) => (
          <li key={p._id}>{p.name} — <Link href={`/persons/${p._id}/edit`}>Edit</Link></li>
        ))}
      </ul>
    </div>
  )
}

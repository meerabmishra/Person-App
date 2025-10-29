import { getSessionServerComponent } from '../../../lib/session'
import { connect } from '../../../lib/mongodb'

export default async function NewPersonPage() {
  const session = await getSessionServerComponent()
  if (!session) return <div>Please sign in to add a person.</div>

  await connect()

  return (
    <div>
      <h2>Add Person</h2>
      <form method="post" action="/api/persons">
        <div>
          <label>Name <input name="name" required /></label>
        </div>
        <div>
          <label>Email <input name="email" /></label>
        </div>
        <div>
          <label>Phone <input name="phone" /></label>
        </div>
        <div>
          <label>Notes <textarea name="notes"></textarea></label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

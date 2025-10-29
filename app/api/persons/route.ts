import { connect, User, Person } from '../../../lib/mongodb'
import { getSessionForRequest } from '../../../lib/session'

export async function POST(req: Request) {
  // create person for signed-in user
  const session = await getSessionForRequest(req)
  if (!session || !session.user?.email) return new Response('Unauthorized', { status: 401 })

  await connect()
  const form = await req.formData()
  const name = form.get('name') as string
  const email = form.get('email') as string | null
  const phone = form.get('phone') as string | null
  const notes = form.get('notes') as string | null

  let user = await User.findOne({ email: session.user.email }).exec()
  if (!user) {
    user = await User.create({ email: session.user.email!, name: (session.user as any).name || undefined, image: (session.user as any).image || undefined })
  }

  const person = await Person.create({ name, email: email || undefined, phone: phone || undefined, notes: notes || undefined, ownerId: user._id })
  return new Response(JSON.stringify(person), { status: 201 })
}

export async function GET(req: Request) {
  const session = await getSessionForRequest(req)
  if (!session || !session.user?.email) return new Response('Unauthorized', { status: 401 })

  await connect()
  const user = await User.findOne({ email: session.user.email }).exec()
  if (!user) return new Response(JSON.stringify([]))

  const persons = await Person.find({ ownerId: user._id }).lean().exec()
  return new Response(JSON.stringify(persons))
}

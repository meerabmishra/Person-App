import { connect, User, Person } from '../../../lib/mongodb'
import { getSessionForRequest } from '../../../lib/session'

export async function GET(req: Request) {
  const session = await getSessionForRequest(req)
  if (!session) return new Response('Unauthorized', { status: 401 })

  await connect()
  const persons = await Person.find({ owner: session.user?.email }).lean().exec()
  return new Response(JSON.stringify(persons), { status: 200 })
}

export async function POST(req: Request) {
  const session = await getSessionForRequest(req)
  if (!session) return new Response('Unauthorized', { status: 401 })

  const body = await req.json()
  await connect()
  const newPerson = await Person.create({ ...body, owner: session.user?.email })
  return new Response(JSON.stringify(newPerson), { status: 201 })
}

export async function PUT(req: Request) {
  const session = await getSessionForRequest(req)
  if (!session) return new Response('Unauthorized', { status: 401 })

  const body = await req.json()
  await connect()
  const updatedPerson = await Person.findOneAndUpdate(
    { _id: body.id, owner: session.user?.email },
    body,
    { new: true }
  ).lean().exec()

  if (!updatedPerson) return new Response('Not Found', { status: 404 })
  return new Response(JSON.stringify(updatedPerson), { status: 200 })
}

export async function DELETE(req: Request) {
  const session = await getSessionForRequest(req)
  if (!session) return new Response('Unauthorized', { status: 401 })

  const { id } = await req.json()
  await connect()
  const deletedPerson = await Person.findOneAndDelete({ _id: id, owner: session.user?.email }).lean().exec()

  if (!deletedPerson) return new Response('Not Found', { status: 404 })
  return new Response(JSON.stringify(deletedPerson), { status: 200 })
}

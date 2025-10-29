import { connect, User } from '../../../lib/mongodb'
import { getSessionForRequest } from '../../../lib/session'

export async function GET(req: Request) {
  const session = await getSessionForRequest(req)
  if (!session) return new Response('Unauthorized', { status: 401 })

  await connect()
  const user = await User.findOne({ email: session.user?.email }).lean().exec()
  if (!user) return new Response('Unauthorized', { status: 401 })

  // Example MCP server action: return a short JSON payload representing an allowed action
  return new Response(JSON.stringify({ message: 'MCP action allowed', user }), { status: 200 })
}

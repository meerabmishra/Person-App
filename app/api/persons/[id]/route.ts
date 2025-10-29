import { connect, Person, User } from '../../../../lib/mongodb';
import { getSessionForRequest } from '../../../../lib/session';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const session = await getSessionForRequest(req);
  if (!session || !session.user?.email) return new Response('Unauthorized', { status: 401 });

  await connect();
  const person = await Person.findOne({ _id: params.id }).lean().exec();
  if (!person) return new Response('Not Found', { status: 404 });

  // ensure ownership
  const user = await User.findOne({ email: session.user.email }).exec();
  if (!user || String((person as any).ownerId) !== String(user._id)) return new Response('Forbidden', { status: 403 });

  return new Response(JSON.stringify(person), { status: 200 });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getSessionForRequest(req);
  if (!session || !session.user?.email) return new Response('Unauthorized', { status: 401 });

  const body = await req.json();
  await connect();

  const user = await User.findOne({ email: session.user.email }).exec();
  if (!user) return new Response('Unauthorized', { status: 401 });

  const updated = await Person.findOneAndUpdate(
    { _id: params.id, ownerId: user._id },
    { name: body.name, email: body.email, phone: body.phone, notes: body.notes },
    { new: true }
  ).lean().exec();

  if (!updated) return new Response('Not Found', { status: 404 });
  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getSessionForRequest(req);
  if (!session || !session.user?.email) return new Response('Unauthorized', { status: 401 });

  await connect();
  const user = await User.findOne({ email: session.user.email }).exec();
  if (!user) return new Response('Unauthorized', { status: 401 });

  const deleted = await Person.findOneAndDelete({ _id: params.id, ownerId: user._id }).lean().exec();
  if (!deleted) return new Response('Not Found', { status: 404 });

  return new Response(JSON.stringify(deleted), { status: 200 });
}

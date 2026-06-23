import { NextResponse } from 'next/server';
import { addNote, getNotes } from '@/lib/db';

export async function GET() {
  return NextResponse.json(getNotes());
}

export async function POST(request: Request) {
  const data = await request.json();

  if (!data?.title || !data?.body) {
    return NextResponse.json({ error: 'Missing title or body' }, { status: 400 });
  }

  const notes = addNote({ title: String(data.title), body: String(data.body) });
  return NextResponse.json(notes);
}

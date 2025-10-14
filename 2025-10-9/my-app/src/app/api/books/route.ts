import { NextResponse } from 'next/server'
import { getBooks, addBook } from '@/lib/data/booksData'

export async function GET() {
  return NextResponse.json(getBooks())
}

export async function POST(req: Request) {
  const data = await req.json()
  addBook(data)
  return NextResponse.json({ message: 'Book added' })
}

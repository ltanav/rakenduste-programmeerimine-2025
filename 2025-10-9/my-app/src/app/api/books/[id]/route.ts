import { NextResponse } from 'next/server'
import { updateBook, deleteBook } from '@/lib/data/booksData'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json()
  updateBook(params.id, data)
  return NextResponse.json({ message: 'Book updated' })
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  deleteBook(params.id)
  return NextResponse.json({ message: 'Book deleted' })
}

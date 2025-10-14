'use client'
import { useState } from 'react'

export default function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Date.now().toString(), title, author, year: Number(year) }),
    })
    setTitle('')
    setAuthor('')
    setYear('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="border p-1" />
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" className="border p-1" />
      <input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" className="border p-1" />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1">Add Book</button>
    </form>
  )
}

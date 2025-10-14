'use client'

import { useState } from 'react'

type NoteFormProps = {
  note?: {
    id: string
    title: string
    content: string
  }
  onSuccess?: () => void
}

export default function NoteForm({ note, onSuccess }: NoteFormProps) {
  const [title, setTitle] = useState(note?.title || '')
  const [content, setContent] = useState(note?.content || '')

  const isEdit = !!note?.id

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const method = isEdit ? 'PATCH' : 'POST'
    const url = isEdit ? `/api/notes/${note!.id}` : '/api/notes'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })

    setTitle('')
    setContent('')
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{isEdit ? 'Update Note' : 'Add Note'}</button>
    </form>
  )
}

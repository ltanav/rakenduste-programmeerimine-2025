import NoteForm from './NoteForm'
import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'

export default async function NotesPage() {
  const { data: notes, error } = await supabase.from('notes').select('*').order('created_at', { ascending: false })
  if (error) return <div>Viga: {error.message}</div>

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm onSuccess={() => window.location.reload()} />
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <NoteForm note={note} onSuccess={() => window.location.reload()} />
          </li>
        ))}
      </ul>
    </div>
  )
}

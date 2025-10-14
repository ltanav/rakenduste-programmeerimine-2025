'use client'

import { useState } from 'react'

type TodoFormProps = {
  todo?: {
    id: string
    task: string
    completed: boolean
  }
  onSuccess?: () => void
}

export default function TodoForm({ todo, onSuccess }: TodoFormProps) {
  const [task, setTask] = useState(todo?.task || '')
  const [completed, setCompleted] = useState(todo?.completed || false)

  const isEdit = !!todo?.id

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const method = isEdit ? 'PATCH' : 'POST'
    const url = isEdit ? `/api/todos/${todo!.id}` : '/api/todos'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, completed }),
    })

    setTask('')
    setCompleted(false)
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      {isEdit && (
        <label>
          Completed
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
      )}
      <button type="submit">{isEdit ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  )
}

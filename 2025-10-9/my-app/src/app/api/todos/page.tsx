import TodoForm from './TodoForm'
import { supabase } from '@/lib/supabaseClient'

export default async function TodosPage() {
  const { data: todos, error } = await supabase.from('todos').select('*').order('created_at', { ascending: false })
  if (error) return <div>Viga: {error.message}</div>

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm onSuccess={() => window.location.reload()} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task} - {todo.completed ? 'Done' : 'Pending'}</span>
            <TodoForm todo={todo} onSuccess={() => window.location.reload()} />
          </li>
        ))}
      </ul>
    </div>
  )
}

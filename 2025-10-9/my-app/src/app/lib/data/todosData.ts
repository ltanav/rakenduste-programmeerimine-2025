export type Todo = {
  id: string
  task: string
  completed: boolean
  created_at: string
}

let todos: Todo[] = [
  {
    id: "1",
    task: "Esimene ülesanne",
    completed: false,
    created_at: new Date().toISOString(),
  },
]

export function getTodos() {
  return todos
}

export function addTodo(todo: Omit<Todo, "id" | "created_at">) {
  const newTodo: Todo = {
    id: Math.random().toString(36).substring(2, 9),
    created_at: new Date().toISOString(),
    ...todo,
  }
  todos.push(newTodo)
  return newTodo
}

export function updateTodo(id: string, updated: Partial<Todo>) {
  const idx = todos.findIndex((t) => t.id === id)
  if (idx !== -1) {
    todos[idx] = { ...todos[idx], ...updated }
  }
  return todos[idx]
}

export function deleteTodo(id: string) {
  todos = todos.filter((t) => t.id !== id)
  return true
}

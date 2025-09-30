export type Todo = { id: string; text: string; createdAt: number; deleted: boolean };

let todos: Todo[] = [
  { id: "1", text: "Test todo", createdAt: Date.now(), deleted: false },
];

export const fetchTodos = async (): Promise<Todo[]> => todos.filter(t => !t.deleted);

export const createTodo = async (text: string) => {
  todos.push({ id: Date.now().toString(), text, createdAt: Date.now(), deleted: false });
};

export const updateTodo = async (id: string, text: string) => {
  const t = todos.find(t => t.id === id);
  if (t) t.text = text;
};

export const deleteTodo = async (id: string) => {
  const t = todos.find(t => t.id === id);
  if (t) t.deleted = true;
};

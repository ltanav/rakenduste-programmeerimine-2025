export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  deleted: boolean;
};

const BASE_URL = "http://localhost:3002/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createTodo = async (task: string) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });
};

export const updateTodo = async (id: string, updates: Partial<Todo>) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
};

export const deleteTodo = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

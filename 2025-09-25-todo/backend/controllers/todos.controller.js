const todos = require("../data/todos.data");

exports.read = (req, res) => {
  const activeTodos = todos.filter((t) => !t.deleted);
  res.json(activeTodos);
};

exports.create = (req, res) => {
  const { task } = req.body;
  const newTodo = {
    id: Date.now().toString(),
    task,
    completed: false,
    deleted: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const todo = todos.find((t) => t.id === id && !t.deleted);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
};

exports.delete = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === id && !t.deleted);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  todo.deleted = true;
  res.json({ message: "Todo deleted" });
};

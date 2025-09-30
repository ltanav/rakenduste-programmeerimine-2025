import express from "express";
import { body, validationResult } from "express-validator";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: "1", text: "Test todo", createdAt: Date.now(), deleted: false },
];

app.get("/todos", (req, res) => {
  res.json(todos.filter(t => !t.deleted));
});

app.post(
  "/todos",
  body("text").isString().notEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const newTodo = {
      id: Date.now().toString(),
      text: req.body.text,
      createdAt: Date.now(),
      deleted: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  }
);

app.patch("/todos/:id", body("text").isString().notEmpty(), (req, res) => {
  const todo = todos.find(t => t.id === req.params.id && !t.deleted);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.text = req.body.text;
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.deleted = true;
  res.json({ success: true });
});


app.get("/admin/todos", (req, res) => {
  res.json(todos); 
});

app.patch("/admin/todos/:id/toggle", (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.deleted = !todo.deleted;
  res.json(todo);
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));

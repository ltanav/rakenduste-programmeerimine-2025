import express from "express";
import { body, validationResult } from "express-validator";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());


let todos = [
  { id: "1", text: "Test todo", createdAt: Date.now(), deleted: false },
];

const JWT_SECRET = "supersecret123";

const USER = { username: "admin", password: "admin123", role: "admin" };

// ================= AUTH ===================

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign(
      { username: USER.username, role: USER.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.json({ token });
  }

  return res.status(401).json({ error: "Invalid credentials" });
});


app.get("/auth/ping", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    return res.json({ message: "Token is valid", user: decoded });
  });
});

// ================= TODOS ==================

app.get("/todos", (req, res) => {
  res.json(todos.filter((t) => !t.deleted));
});

app.post("/todos", body("text").isString().notEmpty(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const newTodo = {
    id: Date.now().toString(),
    text: req.body.text,
    createdAt: Date.now(),
    deleted: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.patch("/todos/:id", body("text").isString().notEmpty(), (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id && !t.deleted);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.text = req.body.text;
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.deleted = true;
  res.json({ success: true });
});

// ================= ADMIN ==================

app.get("/admin/todos", (req, res) => {
  res.json(todos);
});

app.patch("/admin/todos/:id/toggle", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  todo.deleted = !todo.deleted;
  res.json(todo);
});

app.listen(3001, () =>
  console.log("Backend running on http://localhost:3001")
);

const express = require('express');
const app = express();
const PORT = 3001;

// Middleware, et saaks JSON body'd lugeda
app.use(express.json());

// Andmete hoidla (näidis)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// ==========================
// CRUD Endpoints
// ==========================

// CREATE
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// READ ALL
app.get('/users', (req, res) => {
  res.json(users);
});

// READ ONE
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// UPDATE
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  Object.assign(user, req.body);
  res.json(user);
});

// DELETE
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'User deleted' });
});

// ==========================
// Route parameters näited
// ==========================

// /users/:userId/books/:bookId
app.get('/users/:userId/books/:bookId', (req, res) => {
  const { userId, bookId } = req.params;
  res.json({ message: `User ${userId} requested book ${bookId}` });
});

// /flights/:from-:to
app.get('/flights/:from-:to', (req, res) => {
  const { from, to } = req.params;
  res.json({ message: `Flight from ${from} to ${to}` });
});

// ==========================
// Root endpoint
// ==========================
app.get('/', (req, res) => {
  res.send('Hello from backend!!!');
});

// Server käivitamine
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

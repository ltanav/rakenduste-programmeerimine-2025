const express = require("express");
const cors = require("cors");
const catsRoutes = require("./routes/cats.routes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// mount cats routes
app.use("/cats", catsRoutes);

// route parameters examples 
app.get("/users/:userId/books/:bookId", (req, res) => {
  const { userId, bookId } = req.params;
  res.json({ message: `User ${userId} requested book ${bookId}` });
});
app.get("/flights/:from-:to", (req, res) => {
  const { from, to } = req.params;
  res.json({ message: `Flight from ${from} to ${to}` });
});

app.get("/", (req, res) => res.send("Hello from cats backend!"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

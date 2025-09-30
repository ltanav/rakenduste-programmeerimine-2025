const express = require("express");
const app = express();
const PORT = 3002;

const todosRoutes = require("./routes/todos.routes");

app.use(express.json());

app.use("/todos", todosRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

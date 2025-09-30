const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello from TODO backend!");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();


const JWT_SECRET = "supersecret123";


const USER = { username: "admin", password: "admin123", role: "admin" };


router.post("/login", (req, res) => {
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


router.get("/ping", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    return res.json({ message: "Token is valid", user: decoded });
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const todosController = require("../controllers/todos.controller");

router.get("/", todosController.read);

router.post(
  "/",
  body("task").isString().notEmpty().withMessage("Task is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  todosController.create
);

router.put(
  "/:id",
  body("task").optional().isString(),
  body("completed").optional().isBoolean(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  todosController.update
);

router.delete("/:id", todosController.delete);

module.exports = router;

const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

// Sample data
let cats = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

// READ (only not deleted)
exports.read = (req, res) => {
  const active = cats.filter((c) => !c.deleted);
  return res.json(active);
};

// CREATE
exports.create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name } = req.body;
  const newCat = {
    id: uuidv4(),
    name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };
  cats.push(newCat);
  return res.status(201).json(newCat);
};

// UPDATE
exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const id = req.params.id;
  const { name } = req.body;

  const cat = cats.find((c) => c.id === id && !c.deleted);
  if (!cat) return res.status(404).json({ message: "Cat not found" });

  if (name) {
    cat.name = name;
    cat.updatedAt = Date.now();
  }

  return res.json(cat);
};

// REMOVE (soft delete)
exports.remove = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const id = req.params.id;
  const cat = cats.find((c) => c.id === id && !c.deleted);
  if (!cat) return res.status(404).json({ message: "Cat not found" });

  cat.deleted = true;
  cat.updatedAt = Date.now();

  return res.json({ message: "Cat soft-deleted", cat });
};

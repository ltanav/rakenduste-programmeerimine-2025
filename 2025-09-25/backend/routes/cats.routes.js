const express = require("express");
const { body, param } = require("express-validator");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const { catsRouteMiddleware, catsGetRouteMiddleware } = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

// GET /cats  (tagastame ainult deleted: false)
router.get("/", catsGetRouteMiddleware, catsController.read);

// POST /cats  (body: { name: string })
router.post(
  "/",
  body("name").isString().isLength({ min: 1 }).withMessage("Name is required"),
  catsController.create
);

// PUT /cats/:id  (body: { name?: string })
router.put(
  "/:id",
  param("id").isUUID().withMessage("Invalid id"),
  body("name").optional().isString(),
  catsController.update
);

// DELETE /cats/:id  (soft delete)
router.delete("/:id", param("id").isUUID().withMessage("Invalid id"), catsController.remove);

module.exports = router;

import express from "express"

import categoryController from "../controllers/categoriesController.js"

const router = express.Router();

router.route("/")
.get(categoryController.getCategories)
.post(categoryController.postCategories)

router.route("/:id")
.put(categoryController.putCategory)
.delete(categoryController.deleteCategory)

export default router
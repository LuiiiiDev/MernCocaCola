//En este archivo de la carpeta routes vamos a poner los metodos que tiene la ruta "/api/products"

import express from "express"
import productController from "../controllers/productsController.js"

const router = express.Router();

router.route("/")
.get(productController.getProducts)
.post(productController.postProducts)

router.route("/:id")
.put(productController.putProduct)
.delete(productController.deleteProduct)

export default router
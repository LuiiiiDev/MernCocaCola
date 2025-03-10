//En este archivo de la carpeta routes vamos a poner los metodos que tiene la ruta "/api/products"

import express, { Router } from "express"

const router = express.Router();

Router.route("/api/products").get().post().put().delete()

export default router
import express from "express"
import clientController from "../controllers/clientsController.js"

const router = express.Router();

router.route("/")
.get(clientController.getClients)
.post(clientController.postClients)

router.route("/:id")
.put(clientController.putClient)
.delete(clientController.deleteClient)

export default router
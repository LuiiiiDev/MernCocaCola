import express from "express"
import employeeController from "../controllers/employeesController.js"

const router = express.Router()

router.route("/")
.get(employeeController.getEmployees)
.post(employeeController.postEmployees)

router.route("/:id")
.put(employeeController.putEmployees)
.delete(employeeController.deleteEmployees)

export default router
import express from "express"
import branchController from "../controllers/branchesController.js"

const router = express.Router();

router.route("/")
.get(branchController.getBranches)
.post(branchController.postBranches)

router.route("/:id")
.put(branchController.putBranch)
.delete(branchController.deleteBranch)

export default router
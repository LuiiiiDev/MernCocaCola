import express from "express"

const router = express.Router()

import reviewsController from "../controllers/reviewsController.js"

router.route("/")
.get(reviewsController.getReviews)
.post(reviewsController.postReview)

router.route("/:id")
.put(reviewsController.putReview)
.delete(reviewsController.deleteReview)

export default router   
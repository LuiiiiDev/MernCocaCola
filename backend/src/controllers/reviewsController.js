import reviewsModels from "../models/Reviews.js"

const reviewsController = {}

reviewsController.getReviews = async (req, res) => {
    const reviews = await reviewsModels.find().populate("idClient")
    res.json(reviews)
}


reviewsController.postReview = async (req, res) => {
    const { comment, rating, idClient} = req.body
    const newReview = new reviewsModels({comment, rating, idClient})
    await newReview.save()

    res.json({message: "Review saved"})
}

reviewsController.deleteReview = async(req, res) => {
    await reviewsModels.findByIdAndDelete(req.params.id)
    res.json({message: "Review deleted"})
}

reviewsController.putReview = async(req, res) => {
    const newReview = new reviewsModels({comment, rating, idClient})
    const putReview = await reviewsModels.findByIdAndUpdate(
        req.params.id, {comment, rating, idClient}, {new: true}
    )
    res.json({message: "Review updated"})
}

export default reviewsController
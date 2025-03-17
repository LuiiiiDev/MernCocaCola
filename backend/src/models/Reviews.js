/*
    Campos:
        comment
        rating
        idCliente
*/

import {Schema, model} from "mongoose"

const reviewSchema = new Schema({

    comment: {
        type: String,
        require: true,
        maxLength: 200
    },
    rating: {
        type: Number,
        require: true,
        max: 5,
        min: 0
    },
    idClient: {
        type: Schema.Types.ObjectId,
        ref: "clients",
        require: true
    }
}, {
    Timestamp: true,
    strict: false
})

export default model("R eviews", reviewSchema)
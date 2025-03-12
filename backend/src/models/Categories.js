/*
    Campos: 
        name
        description
        status
        image
*/

import {Schema, model} from "mongoose"

const categoriesSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 100,
    },
    description: {
        type: String,
        require: true,
        maxLength: 100,
    },
    status: {
        type: Boolean,
        require: true,
    },
    image: {
        type: String,
        require: true,
        maxLength: 100,
    }
    
},{
    timestamps: true,
    strict: false
})

export default model("Categories", categoriesSchema)
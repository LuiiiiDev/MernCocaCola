/*
    Campos: 
        name
        lastName
        birthday
        email
        password
        telephone
        dui
        isVerified
 */

import {Schema, model} from "mongoose"

const clientsSchema = new Schema({

    name: {
        type: String,
        require: true,
        maxLength: 100,
    },
    lastName: {
        type: String,
        require: true,
        maxLength: 100,
    },
    birthday: {
        type: Date,
        require: true,
    },
    email: {
        type: String,
        require: true,
        maxLength: 100,
    },
    password: {
        type: String,
        require: true,
        maxLength: 8,
    },
    telephone: {
        type: String,
        require: true,
        maxLength: 8,
    },
    dui: {
        type: String,
        require: true,
        maxLength: 9,
    },
    isVerified: {
        type: Boolean,
        require: true,
    }
}, {
    timestamps: true,
    strict: false
})

export default model( "Clients", clientsSchema)
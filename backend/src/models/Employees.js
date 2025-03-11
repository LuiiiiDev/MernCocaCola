/*
    Campos: 
        name,
        lastName,
        birthday,
        email,
        address,
        hireDate,
        password,
        telephone,
        dui,
        isssNumber,
        isVerified
*/

import {Schema, model} from "mongoose"

const employeesSchema = new Schema({
    
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
    address: {
        type: String,
        require: true,
        maxLength: 100,
    },
    hireDate: {
        type: Date,
        require: true,
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
    isssNumber: {
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

export default model("Employees", employeesSchema)
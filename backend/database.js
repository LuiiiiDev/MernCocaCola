import mongoose from "mongoose"

import { config } from "./src/config.js";
//Guardo la direccion de mi base de datos

//const URI = "mongodb+srv://luisesc1210:aevYl8ppuIxj0MRW@lui.xme8g.mongodb.net/"

//Conectar con la base de datos

mongoose.connect(config.db.URI) 

const connection = mongoose.connection

connection.once("open", () => {     
    console.log("Db is connected");
})

connection.once("disconnected", () => {
    console.log("DB is disconnected")
})

connection.once("error", (error) => {
    console.log("Db error" + error)
})  
import mongoose from "mongoose"

//Guardo la direccion de mi base de datos
const URI = "mongodb://localhost:27017/cocacolaDB"

//Conectar con la base de datos

mongoose.connect(URI) 

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
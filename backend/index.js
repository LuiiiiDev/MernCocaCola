//importat el archivo app.js
import app from "./app.js"
import "./database.js"
import { config } from "./src/config.js";

//creo una funcion que se encarga de ejecutar el servidor
async function main(){
    app.listen(config.server.port);
    console.log("Server is runing")
}

//ejecutamos todo
main();
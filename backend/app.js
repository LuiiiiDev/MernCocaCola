//importo todo lo de la libreria de express
import express from "express";
import productRoutes from "./src/routes/products.js"

//creo una constante que es igual a la libreria que importe y la ejecuta
const app = express();
app.use(express.json())
          
app.use("/api/products", productRoutes)

//exporto la constante para poder usar express en otros lados
export default app;
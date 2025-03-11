//importo todo lo de la libreria de express
import express from "express";
import productRoutes from "./src/routes/products.js"
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"

//creo una constante que es igual a la libreria que importe y la ejecuta
const app = express();
app.use(express.json())
          
app.use("/api/products", productRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/branches", branchesRoutes)

//exporto la constante para poder usar express en otros lados
export default app;
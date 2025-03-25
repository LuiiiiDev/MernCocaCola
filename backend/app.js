//importo todo lo de la libreria de express
import express from "express";
import productRoutes from "./src/routes/products.js"
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import categoriesRoutes from "./src/routes/categories.js"
import reviewsRoutes from "./src/routes/reviews.js"
import registerRoutes from "./src/routes/registerEmployees.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from './src/routes/logOut.js'
//creo una constante que es igual a la libreria que importe y la ejecuta
const app = express();
app.use(express.json())
          
app.use("/api/products", productRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/branches", branchesRoutes)
app.use("/api/categories", categoriesRoutes)
app.use("/api/reviews", reviewsRoutes)

app.use("/api/registerEmployes", registerRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes)

//exporto la constante para poder usar express en otros lados
export default app; 
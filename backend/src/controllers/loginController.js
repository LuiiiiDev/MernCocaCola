import clientsModel from "../models/Clients.js"
import employeesModel from "../models/Employees.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import {config} from "../config.js"


const loginController = {}

loginController.login = async (req, res) => {
    const {email, password } = req.body

    try{
        let userFound
        let userType

        if(email === config.emailAdmin.email && password === config.emailAdmin.password){
            userType = "Admin"
            userFound = {_id: "Admin"}
        } else{
            userFound = await employeesModel.findOne({email})
            userType = "Employee"

            if(!userFound){
                userFound = await clientsModel.findOne({email})
                userType = "Client"
            }
        }

        if(!userFound){
            return res.json({message: "User not found" + userFound})
        }

        if(userType !== "Admin"){
            const isMatch = bcryptjs.compare(password, userFound.password)

            if(!isMatch){
                return res.json({message: "Invalid password"})
            }
        }


        //generamos el token
        jsonwebtoken.sign(
 
            //1. lo que guardare
            {id: userFound._id, userType},
            //2. clave secreta
            config.JWT.secret,
            //3. cuando expira
            {expiresIn: config.JWT.expiresIn},
            //4. funcion flecha
            (error, token) => {
                if (error) console.log(error);
                res.cookie("authToken", token)
            }
        )
    }
    catch(error){

    }
}

export default loginController
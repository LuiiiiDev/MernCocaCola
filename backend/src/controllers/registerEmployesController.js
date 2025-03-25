const registerEmployeesController = {}

import Employees from "../models/Employees.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import {config} from "../config.js"
 
registerEmployeesController.postRegisterEmployee = async (req, res) => {
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body

    try{
        const existsEmployee = await Employees.findOne({email})

        if(existsEmployee){
            return res.json({message: "Employee already exists"})
        }

        //Hashear la contraseña
        const passHash = await bcryptjs.hash(password, 10)

        const newEmployee = new Employees({name, lastName, birthday, email, address, hireDate, password: passHash, telephone, dui, isssNumber, isVerified}) 

        await newEmployee.save()

        jsonwebtoken.sign(

            //-1 que voy a guardar
            {id: newEmployee._id},
            //-2 clave secreta
            config.JWT.secret,
            // 3- cuando expira
            {expiresIn: config.JWT.expiresIn},
            // 4- funcion flecha
            (error, token) => {
                if(error) console.log(error) 
                res.cookie("authToken", token)
            res.json({message: "usuario registrado"})
            }
        )
        
    }
    catch(error) {
        console.log(error)
        res.json({
            message: "Error al registrar el empleado" + error
        })
    }
}

export default registerEmployeesController
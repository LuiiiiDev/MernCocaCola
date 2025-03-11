const employeesController = {}

import employeesModel from '../models/Employees.js'

employeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find()
    res.json(employees)
}

employeesController.postEmployees = async (req, res) => {
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body

    const newEmployee = new employeesModel({name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified}) 
    await newEmployee.save()

    res.json({message: "employee saved"})
}

employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id)
    res.json({message: "employee deleted"})
}

employeesController.putEmployees = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body
    await employeesModel.findByIdAndUpdate(req.params.id, {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified})
    res.json({message: "employee updated"})
}

export default employeesController
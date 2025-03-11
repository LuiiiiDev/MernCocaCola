const clientsController = {}

import clientsModel from '../models/Clients.js'

clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find()
    res.json(clients)
}

clientsController.postClients = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body

    const newClient = new clientsModel({name, lastName, birthday, email, password, telephone, dui, isVerified}) 
    await newClient.save()

    res.json({message: "client saved"})
}


clientsController.deleteClient = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({message: "client deleted"})
}

clientsController.putClient = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body

    const putClient = await clientsModel.findByIdAndUpdate(
        req.params.id, {name, lastName, birthday, email, password, telephone, dui, isVerified}, {new: true}
    )
    res.json({message: "client updated"})
}

export default clientsController
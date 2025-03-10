//array de funciones crud
const productsController = {}
import productsModel from "../models/Products.js"

productsController.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products)
}

productsController.postProducts = async (req, res) => {
    const {name, description, price, stock} = req.body

    const newProduct = new productsModel({name, description, price, stock}) 
    await newProduct.save()

    res.json({message: "product saved"})
}

productsController.deleteProduct = async (req, res) => {
    await productsModel.findByIdAndDelete(req.params.id)
    res.json({message: "product deletedy"})
}

productsController.putProduct = async (req, res) => {
    const {name, description, price, stock} = req.boddy

    const putProduct = await productsModel.findByIdAndUpdate(
        req.params.id, {name, description, price, stock}, {new: true}
    )
    res.json({message: "product updated"})
}
const categoriesController = {}

import categoriesModel from '../models/Categories.js'

categoriesController.getCategories = async (req, res) => {
    const categories = await categoriesModel.find()
    res.json(categories)
}

categoriesController.postCategories = async (req, res) => {
    const {name, description, status, image} = req.body

    const newCategory = new categoriesModel({name, description, status, image})
    await newCategory.save()

    res.json({message: "category saved"})
}

categoriesController.deleteCategory = async (req, res) => {
    await categoriesModel.findByIdAndDelete(req.params.id)
    res.json({message: "category deleted"})
}

categoriesController.putCategory = async (req, res) => {
    const {name, description, status, image} = req.body
    await categoriesModel.findByIdAndUpdate(req.params.id, {name, description, status, image})
    res.json({message: "category updated"})
}

export default categoriesController
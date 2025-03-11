const branchesController = {}

import branchesModel from "../models/Branches.js"

branchesController.getBranches = async (req, res) => {
    const branches = await branchesModel.find()
    res.json(branches)
}

branchesController.postBranches = async (req, res) => {
    const {name, address, telephone, schedule} = req.body

    const newBranch = new branchesModel({name, address, telephone, schedule}) 
    await newBranch.save()

    res.json({message: "branch saved"})
}

branchesController.deleteBranch = async (req, res) => {
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "branch deleted"})
}

branchesController.putBranch = async (req, res) => {
    const {name, address, telephone, schedule} = req.body

    const putBranch = await branchesModel.findByIdAndUpdate(
        req.params.id, {name, address, telephone, schedule}, {new: true}
    )
    res.json({message: "branch updated"})
}

export default branchesController
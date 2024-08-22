const categoryModel =  require('../models/CategoriesModel')

const getCategories = async (req, res) => {
    const categories = await categoryModel.getCategories()
    res.status(200).json(categories)
}

const getCategory = async (req, res) => {
    const category = await categoryModel.getCategory(req.params.id)
    res.status(200).json(category)
}

const createCategory = async (req, res) => {
    const category = await categoryModel.createCategory(req.body)
    res.status(200).json(category)
}

const updateCategory = async (req, res) => {
    const category = await categoryModel.updateCategory(req.body, req.params.id)
    res.status(200).json(category)
}

const deleteCategory = async (req, res) => {
    const category = await categoryModel.deleteCategory(req.params.id)
    res.status(200).json(category)
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}
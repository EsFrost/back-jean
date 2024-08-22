const express = require('express')
const categoryRoute = express.Router()
const categoryController = require('../controllers/CategoriesController')

categoryRoute.get('/', categoryController.getCategories)
categoryRoute.get('/:id', categoryController.getCategory)
categoryRoute.post('/', categoryController.createCategory)
categoryRoute.put('/:id', categoryController.updateCategory)
categoryRoute.delete('/:id', categoryController.deleteCategory)

module.exports = categoryRoute
const express = require('express')
const postRoutes = express.Router()
const postsController = require('../controllers/PostsController')

postRoutes.get('/', postsController.getPosts)
postRoutes.get('/:id', postsController.getPost)
postRoutes.post('/', postsController.createPost)
postRoutes.put('/:id', postsController.updatePost)
postRoutes.delete('/:id', postsController.deletePost)

module.exports = postRoutes
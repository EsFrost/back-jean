const postModel = require('../models/PostsModel')

const getPosts = async (req, res) => {
    const posts = await postModel.getPosts()
    res.status(200).json(posts)
}

const getPost = async (req, res) => {
    const post = await postModel.getPost(req.params.id)
    res.status(200).json(post)
}

const createPost = async (req, res) => {
    try {
      const result = await postModel.createPost(
        req.body.author,
        req.body.postedAt,
        req.body.message,
        req.body.latitude,
        req.body.longitude,
        req.body.picture,
        req.body.categoryId
      )
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

const updatePost = async (req, res) => {
    const post = await postModel.updatePost(req.body, req.params.id)
    res.status(200).json(post)
}

const deletePost = async (req, res) => {
    const post = await postModel.deletePost(req.params.id)
    res.status(200).json(post)
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}
const conn = require('../utils/db')

const getPosts = () => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT p.id, p.author, p.postedAt, p.message, p.latitude, p.longitude, p.picture, p.categoryId, c.label 
FROM posts p 
JOIN categories c ON p.categoryId = c.id`, (err, result) => {
            if (err) return reject(err)
            resolve(result)
    })
    })
}

const getPost = (p_id) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM posts p 
        JOIN categories c ON p.categoryId = c.id
        WHERE p.id = ?`, [p_id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
    })
    })
}

const createPost = (author, postedAt, message, latitude, longitude, picture, categoryId) => {
    return new Promise((resolve, reject) => {
      conn.query(
        'INSERT INTO posts (author, postedAt, message, latitude, longitude, picture, categoryId) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [author, postedAt, message, latitude, longitude, picture, categoryId],
        (err, result) => {
          if (err) return reject(err)
          resolve(result)
        }
      )
    })
}

const updatePost = (data, p_id) => {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE posts SET ? WHERE id = ?`, [data, p_id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
    })
    })
}

const deletePost = (p_id) => {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM posts WHERE id = ?`, [p_id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
    })
    })
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}
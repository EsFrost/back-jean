const conn = require('../utils/db')

const getPosts = () => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM posts p 
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

const createPost = (data) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO posts SET ?`, data, (err, result) => {
            if (err) return reject(err)
            resolve(result)
    })
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
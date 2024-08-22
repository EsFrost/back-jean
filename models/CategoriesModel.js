const conn = require('../utils/db')

const getCategories = () => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM categories`, (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const getCategory = (c_id) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM categories WHERE id = ?`, [c_id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const createCategory = (label) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO categories SET ?`, [label], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const updateCategory = (label, c_id) => {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE categories SET ? WHERE id = ?`, [label, c_id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const deleteCategory = (c_id) => {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM categories WHERE id = ?`, [c_id], (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}
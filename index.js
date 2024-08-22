const express = require('express')
const cors = require('cors')
const app = express()
const postsRoutes = require('./routes/PostsRoutes')
const categoriesRoutes = require('./routes/CategoriesRoutes')

app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use('/posts', postsRoutes)
app.use('/categories', categoriesRoutes)

app.listen(3000, () => console.log('Listening on port 3000'))
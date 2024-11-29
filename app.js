const express = require('express')
const HTTP_SERVER = express()
const path = require('path')

HTTP_SERVER.use('/api/cuisines' , require('./Routes/cuisinesRoutes'))
HTTP_SERVER.use('/api/categories', require('./Routes/categoriesRoutes'))
HTTP_SERVER.use('/api/subcategories', require('./Routes/subcategoriesRoutes'))

HTTP_SERVER.use('/uploads', express.static(path.join(__dirname, 'uploads')))
module.exports = HTTP_SERVER
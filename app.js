const express = require('express')
const HTTP_SERVER = express()

HTTP_SERVER.use('/api/cuisines' , require('./Routes/cuisinesRoutes'))
HTTP_SERVER.use('/api/categories', require('./Routes/categoriesRoutes'))
HTTP_SERVER.use('/api/subcategories', require('./Routes/subcategoriesRoutes'))


module.exports = HTTP_SERVER
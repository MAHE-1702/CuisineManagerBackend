const express = require('express')
const HTTP_SERVER = express()
require('./dbconfig')
const cors = require('cors')
const PORT = process.env.PORT || 3000

HTTP_SERVER.use(cors())
HTTP_SERVER.use(express.json())
HTTP_SERVER.use(express.urlencoded({extended:false}))

HTTP_SERVER.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})
HTTP_SERVER.use('/', require('./app'));
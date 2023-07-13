require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes')

routes(app)



app.listen(3000, () =>  { 
    console.log('Server ready')
 })
const app = require('./app')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDatabase = require('./config/database')
const port = 3000 || process.env.PORT

connectDatabase()


app.listen(port, ()=>{
    console.log(`Server is running on: http://localhost:${port}`)
})

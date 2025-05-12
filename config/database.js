const mongoose = require('mongoose')

const mongoKey = process.env.MONGO_KEY

const connectDatabase = ()=>{
    mongoose.connect(mongoKey)
    .then(()=>{
        console.log('Database Connected')
    })
    .catch((err)=>{
        console.log('Databse connection failed due to', err.message)
    })
}


module.exports = connectDatabase;
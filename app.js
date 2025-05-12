const express = require('express')
const app = express()
const tourRoutes = require('./routes/tourRoutes')
const cors = require('cors')

app.use(express.json())
app.use(cors({
   origin: true,
   credentials: true
}));


app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.use('/tour', tourRoutes)


module.exports = app
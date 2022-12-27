// establishes database connection to mongo db
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mohitha' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfully'))

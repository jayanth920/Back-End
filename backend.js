const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()



app.use(express.urlencoded({extended:true}))


app.listen(4000,() => {
    console.log('app is listening on port 4000')
    
} )
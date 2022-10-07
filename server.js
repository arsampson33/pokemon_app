const PORT = 3000
const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()




app.get('/',(req,res)=>{
    res.send("Welcome to the Pokemon App!")
})


app.get('/pokemon', (req,res) =>{
    res.send(pokemon)
})




app.listen(PORT,(req,res)=>{
    console.log('Server running on 3000')
})
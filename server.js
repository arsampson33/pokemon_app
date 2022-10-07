const PORT = 3000
const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()

//Middleware
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())

//Routes
app.get('/',(req,res)=>{
    res.send("Welcome to the Pokemon App!")
})


app.get('/pokemon', (req,res) =>{
    res.render('Index')
})




app.listen(PORT,(req,res)=>{
    console.log('Server running on 3000')
})
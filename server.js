const PORT = 3000
const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const Pokemon = require('./models/pokemonModel')

//Middleware
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.urlencoded({extended:false}))

//Routes
app.get('/',(req,res)=>{
    res.send("Welcome to the Pokemon App!")
})


app.get('/pokemon', (req,res) =>{
    Pokemon.find({},(error, pokemonDB) =>{
        res.render('Index', {pokemon:pokemonDB})
        
    }) 
})

app.get('/pokemon/new',(req,res)=>{
    res.render('New')
})

app.post('/pokemon',(req,res)=>{
    Pokemon.create(req.body,(error,createdPokemon) =>{
        if(error){
            console.log(error)
        }
        console.log(createdPokemon)
        res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id', (req,res)=>{
    Pokemon.findById(req.params.id, (err,foundPokemon) =>{
        res.render('Show', {pokemon:foundPokemon})

    })
})



app.listen(PORT,(req,res)=>{
    console.log('Server running on 3000')

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      mongoose.connection.once("open", () => {
        console.log("connected to mongo");
      });
})
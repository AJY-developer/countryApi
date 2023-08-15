const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {country,state,city} = require('./auth')
require('dotenv').config()


//caliing express and use 

const app = express()
app.use(cors({
    origin : "*"
}))
app.use(express.json())

// env data
const url = process.env.DB_URL;
const base_url = process.env.BASE_URL|| 3000;

//connecting database
mongoose.connect(url).then(()=>{
    console.log('database is connected')
})



app.post("/country",async(req,res)=>{

try {
    const data = await country.find({})
   
    res.send(data)
} catch (error) {
       res.send({message:error.message})
}

   
})
app.post("/state",async(req,res)=>{
   

    try {
        const data = await state.find().where('country_name').equals(req.body.preName).select('name')
        res.json(data)
    } catch (error) {
           res.send({message:error.message})
    }
    
       
})
app.post("/city",async(req,res)=>{
    try {
        const data = await city.find().where('state_name').equals(req.body.preName).select('name')
        res.json(data)
    } catch (error) {
           res.send({message:error.message})
    }
    
})










//llisting ports
app.listen((base_url),()=>{
console.log(`${base_url} is listening`)
})
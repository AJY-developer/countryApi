const mongoose= require('mongoose')
mongoose.pluralize(null)

// creating user schema

const userSchema = new mongoose.Schema({})


const country = mongoose.model('country',userSchema)
const state = mongoose.model('state',userSchema)
const city = mongoose.model('city',userSchema)


module.exports = {country,state,city}
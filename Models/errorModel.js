const mongoose = require('mongoose')

const errorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dateCreated:  { type: String, default: new Date().toDateString() },
  user: String,
  url: String,
  version: String,
  status: String,
  device: String,
  details: String,
  payload: String,
  error: String, 
  location: String,
  build: String, 
  method: String
})

module.exports = mongoose.model('error', errorSchema)
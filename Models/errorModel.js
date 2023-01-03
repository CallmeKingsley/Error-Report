const mongoose = require('mongoose')

const errorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dateCreated:  { type: String, default: new Date().toLocaleString() },
  userId: String,
  url: String,
  version: String,
  isFatal: String,
  errorType: String,
  build: String,
  payload: String,
  method: String,
  functionName: String,
  cause: String,
  platform: String,
  errorMessage: String
})

module.exports = mongoose.model('error', errorSchema)
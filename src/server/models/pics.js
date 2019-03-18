const mongoose = require('mongoose')

const Schema = mongoose.Schema

const picsSchema = new Schema({
    pics: String
})

module.exports = mongoose.model('pic', picsSchema, 'pics')
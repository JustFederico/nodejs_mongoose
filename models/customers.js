const mongoose = require('mongoose')

//defining model by creating schema with type String
const customerSchema = new mongoose.Schema({
    name: String,
    industry: String
});
//making this a model/this describes what things were going to export from this file
module.exports = mongoose.model('Customer', customerSchema);
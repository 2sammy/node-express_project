const mongoose = require('mongoose');
// customer schema

const customerSchema = mongoose.Schema({
    firstname:{ typeof : String},
    lastname: {typeof : String},
    phone: {typeof : String},
    email: {typeof : String}
})

//define  and export
module.exports = mongoose.model('Customer',customerSchema);
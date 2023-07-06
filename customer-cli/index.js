const mongoose = require('mongoose');
// map global promise - get rid of warning
mongoose.Promise =  global.Promise;


  
// connect to db
 const  db = mongoose.connect('mongodb://localhost:27017/customercli',
  {useMongoClient: true
});
 // import model
 const Customer = require('./models/customer');

 //add name
 const addCustomer = (customer) => {
    Customer.create(customer) .then(customer => {
        console.info('New Customer added');
        db.close();
    });

 }

// Find the customer
const findCustomer =  (name) => {
    // make case insensitive
    const search = new RegExp(name,'i');
    Customer.find({$or: [{firstname: search}, {lastname}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer. length} matches`);
        db.close();
    })
}

//Update customers
const updateCustomer = (_id,customer) => {
    Customer.update({_id }, customer)
    .then(customer => {
        console.info('Customer Updated');
        db.close();
    })
}

//customer removed

const removeCustomer= (_id) => {
    Customer.remove({_id })
    .then(customer => {
        console.info('Customer removed');
        db.close();
    })
}

//list customers
const listCustomer= (_id) => {
    Customer.find({_id })
    .then(customer => {
        console.info(customers);
        console.info(`${customer.length} customers`);
        db.close();
    })
}

module.exports = {
    addCustomer,
    findCustomer,
    removeCustomer,
    updateCustomer,
    listCustomer
}
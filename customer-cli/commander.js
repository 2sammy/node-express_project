#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
    findCustomer, 
    addCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require('./index');
 
// Customer Questions

const questions = [{
    type: 'input',
    name: 'firstname',
    message: 'Customer First Name'

},
    {
    type: 'input',
    name: 'lastname',
    message: 'Customer last Name'

},
    {
    type: 'input',
    name: 'phone',
    message: 'Customer phone'

},
    {
    type: 'input',
    name: 'email',
    message: 'Customer email'

},
]

program
.version('1.0.0')
.description('Client Mnagement System')


/*proigram
.commander('add <firstname> <lastname> <phone> <email>')
.alias('a')
.description('Add a customer')
.action((firstname, lastname, phone, email) => {
    addCustomer({firstname,lastname,phone,email});
});
*/
// add customer
program
 .command('add')
 .alias('a')
 .description('Add a customer')
 .action(() => {
    prompt(questions). then(answers => addCustomer(answers))
 })
//find customer
 program
 .command('find <name>')
 .alias('f')
 .description('Find a customer')
 .action(name => findCustomer(name))

 //update customer
 program
 .command('update <_id>')
 .alias('u')
 .description('Update a customer')
 .action(_id => {
    prompt(questions).then(answers=> updateCustomer(_id, answers));
 });
// remove customer
 program
        .command('remove <_id>')
        .alias('r')
        .description('Remove a customer')
        .action((_id) => {
            prompt(questions).then(answers=> removeCustomer(_id));
 });

 //list all customers

 program
        .command('list')
        .alias('l')
        .description('list all customers')
        .action(() =>listCustomer());
 

program.parse(process.argv);
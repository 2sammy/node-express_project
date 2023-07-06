const commander = require('commander');
const {prompt} = require('acquirer');
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
program
 .command('add')
 .alias('a')
 .description('Add a customer')
 .action(() => {
    prompt(questions). then(answers => addCustomer(answers))
 })

 program
 .command('find <name>')
 .alias('f')
 .description('Find a customer')
 .action(name => findCustomer(name))

program.parse(process.argv);
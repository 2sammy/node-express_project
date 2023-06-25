const express = require ('express');

const expressLayouts = require('express-ejs-layouts');

const app =  express()

//ejs
app.use(expressLayouts);
app.set('view engine','ejs'); // setting our view engine
//routes
app.use('/', require('./routes/index'));

app.use('/', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server started on port ${PORT}'))
const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose =require('mongoose');

const app =  express()


//db config
const db = require('./config/keys').MongoURI;
// CONNECT TO MONGO

mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('mongodb connected...'))
.catch(err => console.log(err));

//ejs
app.use(expressLayouts);
app.set('view engine','ejs'); 

// Express body parser
app.use(express.urlencoded({ extended: true }));
// setting our view engine
//routes
app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));

/*

const express = require ("require");

const app = express();

const PORT = process.env.PORT || 5000;
app.get(PORT, console.log(`server running on port ${PORT}`));

*/
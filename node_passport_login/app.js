const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose =require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/passport');
const passport = require('passport');

const app =  express()

//passport config
require('./config/passport')(passport);

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

// express session

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    

}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

//Global Vars
app.use((req,res, next)=> {
    res.locals.success_msg =req.flash('success_msg');
    res.locals.console.error;_msg =req.flash('error_msg');
    res.locals.console.error;_msg =req.flash('error');
    next();

})



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
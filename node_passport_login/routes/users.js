const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
const passport = require('passport')


//User model
const User = require('../models');
const bcrypt = require('bcryptjs/dist/bcrypt');

// method used is get
//login page
router.get('/login',(req, res) => res.render('Login')

);
//Register page
router.get('/register',(req, res) => res.render('register')

);

// Register Handle
router.post('/register', (res,req) => {
    const {name, email,password, password2}=req.body;
    let errors = [];

    //check required fields

    if(!name || !email || !password || !password2) {
        errors.push({msg: 'please fill in all fields'});
    }

    // check password match
    if(password !==password2) {
        errors.push({ msg: 'passwords do not match'});
    }

    //check the lenghth
    if(password.length < 6 ){
        errors.push({msg :'Password should be at least 6 characters'})
    }

    if(errors.length > 0) {
        res.render('register', {

            errors,
            name,
            email,
            password,
            password2


        });
    } else{
        
        //validation passed
        User.findOne({ email: email})
        .then(user => {
            if(user){
                //User exists
                errors.push({msg: 'email already registered'});
                res.render('register', {

                    errors,
                    name,
                    email,
                    password,
                    password2
        
        
                });
            }else{
                const newUser = new User({
                    name,
                    email,
                    password
                });

                //Hash password
                bcrypt.genSalt(10, (err,salt) => bcrypt.hash(newUser.password,salt, (err, hash) => {
                    if(err) throw err;

                    //set passweord to hashed
                    
                    newUser.password = hash
                    //save user
                    newUser.save()
                    .then(user => {
                        res.flash('success_msg', 'You are now registered and can log in')
                        res.redirect('./users/login');
                    })
                    .catch(err=> console.log(err));


                }))

            }
        })
    }

});

//login handle
router.post('/login', (req, res, next) => {
passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
});(req,res, next);
});

//logout handle
router.get('/logout', (req, res)=> {
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('/users/login');
})
module.exports = router;
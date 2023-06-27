const express = require('express');
const router = express.Router();



// method used is get
//login page
router.get('/login',(req, res) => res.render('Login')

);
//Register page
router.get('/register',(req, res) => res.render('register')

);
module.exports = router;
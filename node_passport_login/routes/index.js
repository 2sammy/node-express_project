const express = require('express');
const router = express.Router();

// method used is get
router.get('/',(req,res) => res.render('welcome')


/*

const express = require("express");
const router = express.Router();
app.get('/',(res,req) => res.send('welcome'));



*/

);
module.exports = router;
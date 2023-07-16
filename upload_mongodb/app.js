const express = require ('express');
const path = require ('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const grid = require ('gridfs-stream');

const app = express();
// set engine view
app.set('view engine', 'ejs');

// set the router
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(5000, () => console.log("server started..."))
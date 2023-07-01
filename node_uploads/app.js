const express = require('express');
const multer = require('multer');
const ejs = require ('ejs');
const path = require('path');

//set stoirage engine
const storage = multer.diskStorage({
    destination: '/public/uploads',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

//init upload
const upload = multer({
    storage: storage
}).single('myImage');

//init app
const app = express();

//setting ejs
app.set('view engine','ejs');

//public folder

app.use(express.static('/public'));
// app.use(express.static('/public));

app.get('/', (req, res) => res.render('index'));

// protect our route

app.post('/upload', (req, res) => {
    res.send('test')
    
})

const port = 3000;
app.listen(port, () => console.log(`server running on port ${port}`));

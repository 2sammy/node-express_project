const express = require('express');
const multer = require('multer');
const ejs = require ('ejs');
const path = require('path');

//set storage engine
const storage = multer.diskStorage({
    destination: '/public/uploads',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

//init upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 100000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('myImage');
//check File type

function checkFileType(){
    //Allowed ext
    const filetypes = /jpeg|jpg|gif/;
    // check ext
    const extname = filetypes.test(path.extname
        (file.originalname).toLowerCase());

        // check mime
const mimetype = filetypes.test(file.mimetype);

if(mimetype && extname ){
    return cb(null,true);

}else{
    cb('Error: images only');
}

}

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
    upload(req, res, (err) =>{
        // checking for the error
        if (err) {
            res.render('index', {
                msg: err
            });
        }
        else {
           if(req.file == undefined){
            res.render('index', {
                msg: 'error :  No file selected'
           } );
         } else {
            res.render('index', {
                msg: 'File uploaded',
                file: `upload/ ${req.file.filename}`
            });
           }

        }
    });
    
});

const port = 3000;
app.listen(port, () => console.log(`server running on port ${port}`));






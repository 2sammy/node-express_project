const fs = require('fs');
const path = require('path');

// creat folder
fs.mkdir(path.join(__dirname, '/test'), {},err =>{
    if(err) throw err;
    console.log('Folder created...')
})
// create and write to file
fs.writeFile(path.join(__dirname, '/test','hello.txt'),
'hello world',err =>{
    if(err) throw err;
    console.log('Folder written...');
})

//file append
fs.appendFileFile(path.join(__dirname,
     '/test','hello.txt'),
'am fine thankyou',err =>{
    if(err) throw err;
    console.log('Folder written...');
});

fs.readFile(path.join(__dirname, '/test','hello.txt'),
'utf8',(err,data) =>{
    if(err) throw err;
    console.log('Folder written...');
})

// rename file
fs.rename(path.join(__dirname, '/test','hello.txt'),
path.join(__dirname, '/test','hellow.txt'),
err =>{
    if(err) throw err;
    console.log('File renamed...');
})
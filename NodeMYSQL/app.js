const express = require('express');
const mysql = require('sql');


// create connection

const db = mysql.createConnection({

    host : "localhost",
    user : " root",
    password : " 122334",
    database: "nodemysql"




});

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('my sql is connected...');

});

//create db
app.get('/createdb', (req, res)=> {
    let sql ='CREATE DATABASE nodemysql';
    db.querry(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created...');
    });
});
//Create table
app.get('/createpoststable', (req, res) => {
    let sql ='CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255) PRIMRY KEY (id)';
    db.querry(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('post table created..');
    });
})
// insert post 1
app.get('/addpost1', (req, res) => {
    let post = {title:'post one', body: 'thisis post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let querry = db.querry(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('post 1 added....');
    });
})
// insert post 2
app.get('/addpost2', (req, res) => {
    let post = {title:'post two', body: 'this is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let querry = db.querry(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('post 2 added....');
    });
})
    //selects posts

app.get('/getposts', (req, res) => {
    let sql = 'SELECT  *FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('posts fetched...');
    });
})
    //select single post

app.get('/getposts/:id', (req, res) => {
    let sql = `SELECT  *FROM posts' WHERE id =${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(result);
        res.send('post fetched...');
    });

    //update the  post
app.get('/getposts/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql =` UPDATE posts SET title = '${newTitle}' WHERE  id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('post updated...');
    });
});
});
app.get('/deleteposts/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql =` DELETE FROM posts WHERE  id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('post deleted...');
    });
});


const app = express();


app.listen('3000' ,() => {
    console.log('server started..')
});
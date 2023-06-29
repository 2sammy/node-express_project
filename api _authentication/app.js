const express = require('express');
const jwt = require('jsowebtoken');
//initialize our app
 const app = express();

 //creating local route
 app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome api'
    });

 });


 //route i would like to protect
 app.post('/api/posts', verifyToken,(req, res) => {

    jwt.verify(req.token, 'secretkey', (err,authData) => {
        if(err) {
            res.sendStatus(403);
        }

    else{
    res.json({
        message : 'post created',
        authData
    });
}
});
 });

 app.post('/api/login', (req, res) => {

    //mock user
    const user = {
        id: 1,
        username: 'sam',
        email: 'samuelmanoah61@gmail.com'
    }

    jwt.sign({user}, 'secretkey',{epiresIn : '30s'} , (err, token)=> {
        res.json({
            token
        });
    });
 });
 //format of the token
 //authorization: bearer <access_token

 //verify token
 function verifyToken(res,req,next){
    //get auth header value
    const bearerHeader = req.headers['authorization']
    //check the bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
       //split at thespace
       const bearer = bearerHeader.split('')
       //get token from array
       const bearerToken = bearer[1];
       req.token = bearerToken;
       //next middleware
       next();
    }
        else {
            //forbidden
            res.sendStatus(403);
        }
    }
 

 app.listen(5000, () => console.log('server started on port 5000'));
const express = require('express');
const webpush = require('web-push');
const bodyparser = require('body-parser');
const path = require('path');

const app =express();
//static path
app.use(express.static(path.join(__dirname,"client")));


// middleware

app.use(bodyparser.json())

const publicVapidKey = "BENIK-Qe4hwFHG5HfdpzOPXZaGzyN6qHNfnPBwum48eWAjfbykMQ_auCojl8qItBYPnyjOVaZMmmBz1ZkAjJWB4"
const privateVapidKey ="PEXxLymfHLkZAY4xHK_fODme6-PK43twa4WIYkzNk2k"

webpush.setVapidDetails('mailto: test@test.com', publicVapidKey, privateVapidKey);

//subscribe Route
app.post('/subscribe', (req, res) => {
    //Get push Subscription
    const subscription = req.body;

    //// send 201 - resource created
    res.status(201).json({});

    //create payload
    const payload =JSON.stringify({title : 'Push Test'});

    // pass the object into sendNotification
    webpush.sendNotification(subscription,payload).catch(err => console.error(err));
});
const PORT = 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
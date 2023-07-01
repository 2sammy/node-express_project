const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

//init app
const app = express();

//init Nexmo
const nexmo = new Nexmo({

    apiKey: '87bd97b',
    apiSecret: '17d4e80432b74b18'

}, {debug: true});

//engine template setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//public folder
app.use(express.static(__dirname + '/publlic'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//index rotute
app.get('/', (req, res) => {
    res.render('index');
})



// catch form submit
app.post('/', (req, res) => {
   // res.send(req.body);
    //console.log(req.body);
    const number = req.body.number;
    const text = req.body.text

    nexmo.message.sendSms(
        '12034848525', number, text, { type: 'unicode'},
        (err, responseData) => {
            if(err) {
                console.log(err)
            }
            else{
              console.dir(responseData);  

              //Get data from response
              const data = {
                id: responseData.messages[0]['message-id'],
                number: responseData.messages[0]['to']
              }
            }
        }
    )


});

//define port
const port = 3000;

const server = app.listen(port, () => console.log(`server started on port ${port}` ));


const io = socketio(server);
io.on('connection', (socket) => {
    console.log('connected');
    io.on('disconnected', () => {
        console.log('disconnected');
    })
})
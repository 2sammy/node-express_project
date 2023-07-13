const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const { info } = require('console');

const app = express();


//view engine set up
app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname, '/public')));

//bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/', (req, res) => {
    console.log(req.body);
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h1>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
    // create reusable transporter object using the default smtp
    let transporter = nodemailer.createTransport({
        host: 'mail.traversymedia.com',
        port: 587,
        secure: false, // true for 587, false for other ports
        auth: {
            user: 'samuelmanoah61@gmail.com', //generated ethereal user
            pass: 'say@6102' //generated ethereal password
        }
    });
// set up email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <samuelmanoah61@gmail.com', // sender address
        to:'techguyinfo@gmail.com', //list of receivers
        subject:'Node contact request', // subject line
        text:'Hallo world', // plain text body
        html: 'output' //html body
    };

    // send mail with defined transport objoect
    transporter.sendMail(mailOptions, (error, info) => {
        if (error ){
            return console.log(error);
        }
        console.log('message sent: %s', info.messageId);
        console.log('Preview URL: : %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', {msg: 'Email has been sent'})
    });
});

app.listen(4000, () => console.log('Server started....'));

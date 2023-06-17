const express = require('express');
const errorHandler = require('./midleware/errorhandler');
const connectDb = require('./config/dbConnections');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

const port =process.env.PORT ||  5000

app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))

app.use(express.json());
app.use(errorHandler);

   
 app.listen(port,() => {
    console.log('server running on port ${port}');
 })
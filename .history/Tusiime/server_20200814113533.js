const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const patientRoutes = require('./routes/patientRoutes');
const path = require("path");


const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//using static files
server.use(express.static("public"));
server.set('view engine', 'pug')
server.set('views', '/views');

//connecting to database
mongoose.connect(
    "mongodb://localhost:27017/coronavirusRegister", { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
        if (err) throw err;
        console.log("You are connected to database");
    });



//connceting to the route
server.use('/', patientRoutes)


server.listen(4040, () => {
    console.log('listening on 4040')
});
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const patientRegisterRoutes = require('./routes/patientRegisterRoutes');
const path = require("path");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//using static files
app.use(express.static("public"));
app.set('view engine', 'pug')
server.set('views', __dirname + '/views');

//connecting to database
mongoose.connect(
    "mongodb://localhost:27017/coronaPatientdb", { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
        if (err) throw err;
        console.log("You are connected to database");
    });



//connecting to the route

app.use('/patientRegister', patientRegisterRoutes)


app.listen(4040, () => {
    console.log('listening on port 4040')
});
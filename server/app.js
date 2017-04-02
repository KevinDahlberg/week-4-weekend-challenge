//General Modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var rental = require('./routes/rental.js');
var port = 4000;

//Database Variables
var mongoose = require("mongoose");
var mongoURI = "mongodb://localhost:27017/realestate";
var MongoDB = mongoose.connect(mongoURI).connection;

//If there is an error connecting to the database, let us know!
MongoDB.on("error", function(err){
  console.log("Mongo Connection Error: " + err);
});

//If we successfully hooked up to the database, let us know!
MongoDB.once("open", function(){
  console.log("Tots connected to Mongo, meow.");
});

//uses
app.use(express.static('./server/public', {index: 'views/index.html'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/rental', rental);

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});











// //routes
// var rental = require("./routes/rental");
//
// //Database Variables
// var mongoose = require("mongoose");
// var mongoURI = "mongodb://localhost:27017/company";
// var MongoDB = mongoose.connect(mongoURI).connection;
//
// //If there is an error connecting to the database, let us know!
// MongoDB.on("error", function(err){
//   console.log("Mongo Connection Error: " + err);
// });
//
// //If we successfully hooked up to the database, let us know!
// MongoDB.once("open", function(){
//   console.log("Tots connected to Mongo, meow.");
// });
//
// //uses
// app.use(express.static('./server/public', {index: 'views/index.html'}));
// app.use(bodyParser.urlencoded({extended: true}));
// // app.use('/rental', rental);
//
// //listening
// app.listen(port, function(){
//   console.log("Listening to: ", port);
// });

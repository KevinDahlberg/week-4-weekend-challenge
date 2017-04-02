var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");


// Defines HOW Documents will be saved to the Database
var RentalSchema = mongoose.Schema({
  rent : Number,
  sqft: Number,
  city: String
});

var Rentals = mongoose.model("Listings", RentalSchema);

//GET employees
router.get("/", function(req,res){
  //Get all employees
  Rentals.find(function(err, allRentals){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allRentals);
  });
});

module.exports = router;

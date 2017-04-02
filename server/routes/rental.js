var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");


// Defines HOW Documents will be saved to the Database
var RentalSchema = mongoose.Schema({
  rent : Number,
  sqft: Number,
  city: String
});

var SaleSchema = mongoose.Schema({
  cost : Number,
  sqft : Number,
  city : String
});

var Rentals = mongoose.model("Listings", RentalSchema);

//GET statement
router.get("/", function(req,res){
  Rentals.find(function(err, allRentals){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allRentals);
  });
});

//POST statement
router.post("/newItem", function(req,res){
  console.log(req.body.cost);
  var rental = new Rentals();
  rental.rent = req.body.cost;
  rental.sqft = req.body.sqft;
  rental.city = req.body.city;
  rental.save(function(err, savedRentals){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    res.send(savedRentals);
  });
});

module.exports = router;

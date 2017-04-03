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

var Rentals = mongoose.model("Rentals", RentalSchema, "listings");
var Sales = mongoose.model("Sales", SaleSchema, "listings");

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
  console.log(req.body);
  if (req.body.cost){
    var sale = new Sales();
    sale.cost = req.body.cost;
    sale.sqft = req.body.sqft;
    sale.city = req.body.city;
    sale.save(function(err, savedSales){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }

      res.send(savedSales);
    });
  } else if (req.body.rent){
    var rental = new Rentals();
    rental.rent = req.body.rent;
    rental.sqft = req.body.sqft;
    rental.city = req.body.city;
    rental.save(function(err, savedRentals){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }

      res.send(savedRentals);
    });
  } else {
    console.log("error saving data");
  }
});

module.exports = router;

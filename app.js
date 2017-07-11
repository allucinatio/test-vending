const express = require("express");
const machine = require("./machine");
const mongoose = require("mongoose");
const models = require('./models/vend.js');
mongoose.Promise = require('bluebird');
const app = express();

mongoose.connect('mongodb://localhost:27017/vendingmachine');

// Adding items to vends db:
// MongoDB:
// db.inventories.insertMany([
//     {
//       "id": 01,
//       "item": "Gummy worms",
//       "cost": 50,
//       "quantity": 4
//     },
//     {
//       "id": 02,
//       "item": "Pop rocks",
//       "cost": 75,
//       "quantity": 10
//     },
//     {
//       "id": 03,
//       "item": "Pixie sticks",
//       "cost": 35,
//       "quantity": 3
//     },
// ]);

// Mongoose:
let inventory = new models.Inventory({});
let puracheses = new models.Purchase({});

// inventory.save().then(function() {
//     console.log("item added to database");
//   }).catch(function(err) {
//     console.log("error adding item to the database");
//     console.log(err);
//   });


// GET /api/customer/items - get a list of items
// return models.Inventory as json
app.get('/api/customer/items', function(req, res){

  models.Inventory.find().then(function(inventory){
    res.json(
      {
        'status': 'success',
        'data': [inventory]
      }
    )
  }).catch(function(err){
    return console.log(err);
  });

});

// POST /api/customer/items/:itemId/purchases - purchase an item
app.post('/api/customer/items/:itemId/purchases', function(req, res){

  // check money given against cost for item in model.Inventory

  // refund or error based on ^
    // refund: subtract from totalMoney in model.Purchase
    // error: tell the user they didn't give enough money

  // subtract from quantity for item in model.Inventory\

  // add to model.Purchase : item, datetime

  // add to model.Purchase : add money given to totalMoney

});


// GET /api/vendor/purchases - get a list of all purchases with their item and date/time

app.get('/api/vendor/purchases', function(req, res){

// return purchase object from models.Purchase
  models.Purchase.find().then(function(purchases){
    res.json(
      {
        'status': 'success',
        'data': [purchases]
      }
    )
  }).catch(function(err){
    return console.log(err);
  });
})


// GET /api/vendor/money - get a total amount of money accepted by the machine
app.get('/api/vendor/money', function(req, res){
// return totalMoney from models.Purchase

})

// POST /api/vendor/items - add a new item not previously existing in the machine
app.post('/api/vendor/items', function(req, res){
  // add item, cost and quantity to models.Inventory

})

// PUT /api/vendor/items/:itemId - update item quantity, description, and cost
app.put('/api/vendor/items/:itemId', function(req, res){
  // update item, cost and quantity in models.Inventory
})


if (require.main === module) {
    app.listen(3000, function () {
        console.log("Server running at http://localhost:3000")
    })
}

module.exports = app;

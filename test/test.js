const assert = require("assert")
const request = require("supertest")
const app = require("../app")
const models = require('../models/vend.js');

// test for GET /api/customer/items
describe("GET /api/customer/items", function() {
  //beforeEach here?

  it("should respond with json", function (done) {
    request(app)
      .get("/api/customer/items")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done)
  })
})



// test for POST /api/customer/items/:itemId/purchases
// it should get the amount of money the user input
// it should add to Purchases db table  
describe("POST /api/customer/items/:itemId/purchases", function() {

})


// test for GET /api/vendor/purchases
describe("GET /api/vendor/purchases", function() {

  it("should respond with json", function (done) {
    request(app)
      .get("/api/vendor/purchases")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done)
  })
})


// test for GET /api/vendor/money
// it should



// test for POST /api/vendor/items
// it should



// test for PUT /api/vendor/items/:itemId
// it should

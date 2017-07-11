const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need a inventory table and a purchases table
// inventory:
  // item
  // cost
  // quantity

// purchases:
  // item
  // date time


const inventorySchema = new Schema({
  id: {type:Number, required:true},
  item: {type:String, required:true},
  cost: {type:Number, required:true},
  quantity: {type:Number, required:true}
});

const purchaseSchema = new Schema({
  purchase: {
    item: {type:String, required:true},
    dateTime: {type:Date, required:true, default: Date.now}
  },
  totalMoney: {type:Number, required:true, default:0}
});

const Inventory = mongoose.model("Inventory", inventorySchema);
const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = {
  Inventory, Purchase
}

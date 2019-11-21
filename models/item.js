const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create schema
const ItemSchema = new Schema({
  sku: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  pricing: {
    purchase_price: {
      type: Number,
      required: true
    },
    sale_price: {
      type: Number,
      required: true
    }
  },
  date_create: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);

/* ----- Order schema for MongoDB ----- */

const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose, 2);

const Schema = mongoose.Schema;

const schema = new Schema({
  order: { type: Array, required: true },
  customer: { type: Array, required: true },
  totalAmount: { type: Float, required: true },
  createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Order', schema);
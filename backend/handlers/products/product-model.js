
/* ----- Product schema for MongoDB ----- */

const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose, 2);

const Schema = mongoose.Schema;

const schema = new Schema({
  productName: { type: String, unique: true, required: true },
  price: { type: Float, required: true },
  quantity: { type: Number, required: true, default: 0 },
  createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);
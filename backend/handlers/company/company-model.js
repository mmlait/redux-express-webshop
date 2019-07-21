
/* ----- Company schema for MongoDB ----- */

const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose, 2);

const Schema = mongoose.Schema;

const schema = new Schema({
  companyName: { type: String, unique: true, required: true },
  companyBalance: { type: Float, required: true },
  createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Company', schema);
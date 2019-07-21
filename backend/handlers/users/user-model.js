
/* ----- User schema for MongoDB ----- */

const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const Schema = mongoose.Schema;

const schema = new Schema({
  hash: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  role: { type: Number, required: true, default: 0 },
  isAdmin: { type: Boolean, required: true, default: false },
  balance: { type: Float, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);

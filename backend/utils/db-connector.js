
/* ----- MongoDB connector ----- */

const mongoose = require('mongoose');
const conf = require('../../config.json');
const userSchema = require('../handlers/users/user-model');
const productSchema = require('../handlers/products/product-model');
const orderSchema = require('../handlers/orders/order-model');
const companySchema = require('../handlers/company/company-model');

mongoose.connect(conf.MONGODB_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// Note whether connection is successful
mongoose.connection.on('error', console.error.bind(console, '\x1b[31m%s\x1b[0m', 'Error connecting to database:'));
mongoose.connection.once('open', console.log.bind(console, '\x1b[36m%s\x1b[0m', 'Database connection established successfully.'));

module.exports = {
  User: userSchema,
  Product: productSchema,
  Order: orderSchema,
  Company: companySchema
};
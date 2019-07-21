
/* ----- Order handler functions (database operations) ----- */

const dbConn = require('../../utils/db-connector');

const Order = dbConn.Order;

// create a new order
const create = async (params) => {
  console.log('Received API call: orders/add');
  const order = new Order(params);
  await order.save();
  return {};
};

// get properties of all orders
const readAll = async () => {
  console.log('Received API call: orders/readAll');
  const orders = await Order.find();
  const allOrders = [];
  for (let i = 0; i < orders.length; i++) {
    allOrders.push(orders[i]);
  }
  return allOrders;
};

// get properties of a single order
const read = async (id) => {
  console.log('Received API call: orders/read');
  const order = await Order.findById(id);
  return order;
};

// update properties of a single order
const update = async (id, newParams) => {
  console.log('Received API call: orders/update');
  const order = await Order.findById(id);
  if (!order) {
    throw new Error('Order could not be found');
  }
  // update order with new properties and store to db
  Object.assign(order, newParams);
  await order.save();
  return order;
};

// remove a single order
const remove = async (id) => {
  console.log('Received API call: orders/remove');
  await Order.findOneAndDelete({ _id: id });
  return {};
};

module.exports = {
  create,
  readAll,
  read,
  update,
  remove,
};

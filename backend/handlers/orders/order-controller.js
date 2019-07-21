
/* ----- Order request handler ----- */

const express = require('express');
const orderService = require('./order-service');
const API_KEY = 'addYourOwnMailgunKey';
const DOMAIN = 'sandboxAddYourOwnMailgunDomain.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const router = express.Router();

// add new order
const add = (req, res, next) => {
  orderService.create(req.body)
  .then((success) => {
    if (success) {
      let order = req.body.order;
      let total = req.body.totalAmount;
      let customerEmail = req.body.customer.email;
      let productsInOrder = [];
      let i;
      for (i = 0; i < order.length; i++) { 
        let productName = order[i].product.productName;
        let amount = order[i].product.amount;
        let subtotal = order[i].product.subtotal;
        productsInOrder.push('\n\n' + productName + '\namount:' + amount + '\nsubtotal: ' + subtotal + '$');
      }

      const data = {
        from: 'The Company <foo@bar.com>',
        to: customerEmail,
        subject: 'Order Confirmation',
        text: 'Thank you for your order! '
        + '\n\nCustomer:\n'
        + req.body.customer.firstName + ' ' + req.body.customer.lastName
        + '\n' + req.body.customer.email
        + '\n\n--- Order ---'
        + productsInOrder
        + '\n\nTotal: ' + total + '$'
        + '\n\n\nThis message was sent automatically. Do not reply to this message.'
      };

        mailgun.messages().send(data, (error, body) => {
        console.log("Order confirmation email sent to customer (" + customerEmail + ').');
      });
      return res.json(success);
    }
    return res.status(400).json({ message: 'Encountered problem creating order, please try again' });
  })
  .catch(err => next(err));
};

// get details about all orders
const readAll = (req, res, next) => {
  orderService.readAll()
  .then((orders) => {
    if (orders) {
      return res.json(orders);
    }
    return res.status(404).json({ message: 'Not found' });
  })
  .catch(err => next(err));
};

// get order details based on id
const read = (req, res, next) => {
  orderService.read(req.query.id)
  .then((order) => {
    if (order) {
      return res.json(order);
    }
    return res.status(404).json({ message: 'Not found' });
  })
  .catch(err => next(err));
};

// update order details based on id
const update = (req, res, next) => {
  orderService.update(req.query.id, req.body)
  .then((order) => {
    if (order) {
      return res.json(order);
    }
    return res.status(400).json({ message: 'Occured while updating order' });
  })
  .catch(err => next(err));
};

// remove order based on id
const remove = (req, res, next) => {
  orderService.remove(req.query.id)
  .then((order) => {
    if (order) {
      return res.json(order);
    }
    return res.status(400).json({ message: 'Occured while removing order' });
  })
  .catch(err => next(err));
};

// API routes
router.post('/add', add);
router.get('/readAll', readAll);
router.get('/read', read);
router.put('/update', update);
router.delete('/remove', remove);

module.exports = router;

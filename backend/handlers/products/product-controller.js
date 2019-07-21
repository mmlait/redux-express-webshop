
/* ----- Product request handler ----- */

const express = require('express');
const productService = require('./product-service');

const router = express.Router();

// add new product
const add = (req, res, next) => {
  // Only employees can add products
  if(req.user.role == 1){
    productService.create(req.body)
    .then((success) => {
      if (success) {
        return res.json(success);
      }
      return res.status(400).json({ message: 'Encountered problem adding product, please try again' });
    })
    .catch(err => next(err));
  } else {
      return res.status(400).json({ message: 'Employee status required.' });
    }
};

// get details about all products
const readAll = (req, res, next) => {
  productService.readAll()
  .then((products) => {
    if (products) {
      return res.json(products);
    }
    return res.status(404).json({ message: 'Not found' });
  })
  .catch(err => next(err));
};

// get product details based on id
const read = (req, res, next) => {
  productService.read(req.query.id)
  .then((product) => {
    if (product) {
      return res.json(product);
    }
    return res.status(404).json({ message: 'Not found' });
  })
  .catch(err => next(err));
};

// update product details based on id
const update = (req, res, next) => {
  productService.update(req.query.id, req.body)
  .then((product) => {
    if (product) {
      return res.json(product);
    }
    return res.status(400).json({ message: 'Occured while updating product' });
  })
  .catch(err => next(err));
};

// remove product based on id
const remove = (req, res, next) => {
  // verify current user has employee status if removing products
  if(req.user.role == 1){
    productService.remove(req.query.id)
    .then((product) => {
      if (product) {
        return res.json(product);
      }
      return res.status(400).json({ message: 'Occured while removing product' });
    })
    .catch(err => next(err));
  } else {
      return res.status(400).json({ message: 'Employee status required.' });
    }
};

// API routes
router.post('/add', add);
router.get('/readAll', readAll);
router.get('/read', read);
router.put('/update', update);
router.delete('/remove', remove);

module.exports = router;

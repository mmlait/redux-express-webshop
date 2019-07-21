
/* ----- Company request handler ----- */

const express = require('express');
const companyService = require('./company-service');

const router = express.Router();

// create new company
const register = (req, res, next) => {
  companyService.create(req.body)
  .then((success) => {
    if (success) {
      return res.json(success);
    }
    return res.status(400).json({ message: 'Encountered problem creating company, please try again' });
  })
  .catch(err => next(err));
};

// get details about all companies
const readAll = (req, res, next) => {
  companyService.readAll()
  .then((companies) => {
    if (companies) {
      return res.json(companies);
    }
    return res.status(404).json({ message: 'Not found' });
  })
  .catch(err => next(err));
};

// get company details based on id
const read = (req, res, next) => {
  companyService.read(req.query.id)
  .then((company) => {
    if (company) {
      return res.json(company);
    }
    return res.status(404).json({ message: 'Not found' });
  })
  .catch(err => next(err));
};

// update company details based on id
const update = (req, res, next) => {
  companyService.update(req.query.id, req.body)
  .then((company) => {
    if (company) {
      return res.json(company);
    }
    return res.status(400).json({ message: 'Occured while updating company' });
  })
  .catch(err => next(err));
};

// API routes
router.post('/register', register);
router.get('/readAll', readAll);
router.get('/read', read);
router.put('/update', update);

module.exports = router;
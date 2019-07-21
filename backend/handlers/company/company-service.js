
/* ----- Company handler functions (database operations) ----- */

const dbConn = require('../../utils/db-connector');

const Company = dbConn.Company;

// create a new company
const create = async (params) => {
  console.log('Received API call: company/add');
  if (await Company.findOne({ companyName: params.companyName })) {
    throw new Error('Name already exists');
  }
  const company = new Company(params);
  await company.save();
  return {};
};

// get properties of all companies
const readAll = async () => {
  console.log('Received API call: company/readAll');
  const companies = await Company.find();
  const allCompanies = [];
  for (let i = 0; i < companies.length; i++) {
    allCompanies.push(companies[i]);
  }
  return allCompanies;
};

// get properties of a company
const read = async (id) => {
  console.log('Received API call: company/read');
  const company = await Company.findById(id);
  return company;
};

// update properties of a company
const update = async (id, newParams) => {
  console.log('Received API call: company/update');
  const company = await Company.findById(id);
  if (!company) {
    throw new Error('Company could not be found');
  }
  if (company.companyName !== newParams.companyName && await Company.findOne({ companyName: newParams.companyName })) {
    throw new Error('Company name already exists');
  }
  // update company with new properties and store to db
  Object.assign(company, newParams);
  await company.save();
  return company;
};
  
module.exports = {
    create,
    readAll,
    read,
    update,
  };
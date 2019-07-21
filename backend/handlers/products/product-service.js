
/* ----- Product handler functions (database operations) ----- */

const dbConn = require('../../utils/db-connector');

const Product = dbConn.Product;

// create a new product
const create = async (params) => {
  console.log('Received API call: products/add');
  try {
    // check that product name does not already exist
    if (await Product.findOne({ productName: params.productName })) {
      throw new Error('Name already exists');
    }
    const product = new Product(params);
    await product.save();
    return {};
  } catch (e) {
    return { message: e + ' => Product could not be created'};
  }
};

// get properties of all products
const readAll = async () => {
  console.log('Received API call: products/readAll');
  // retrieve data from db
  const products = await Product.find();
  const allProducts = [];
  for (let i = 0; i < products.length; i++) {
    allProducts.push(products[i]);
  }
  return allProducts;
};

// get properties of a single product
const read = async (id) => {
  console.log('Received API call: products/read');
  const product = await Product.findById(id);
  return product;
};

// update properties of a single product
const update = async (id, newParams) => {
  console.log('Received API call: products/update');
  // retrieve data from db
  const product = await Product.findById(id);

  // check that product with given id does exist
  if (!product) {
    throw new Error('Product could not be found');
  }
  // check that product name is not already in use
  if (product.productName !== newParams.productName && await Product.findOne({ productName: newParams.productName })) {
    throw new Error('Product name already exists');
  }
  // update product with new properties and store to db
  Object.assign(product, newParams);
  await product.save();
  // return updated product details
  return product;
};

// remove a single product
const remove = async (id) => {
  console.log('Received API call: products/remove');
  await Product.findOneAndDelete({ _id: id });
  return {};
};

module.exports = {
  create,
  readAll,
  read,
  update,
  remove,
};

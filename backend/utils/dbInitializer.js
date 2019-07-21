const axios = require('axios');
const dbConn = require('./db-connector');

const User = dbConn.User;
const dbInit = {};

let authToken = "";

let productData = [
    { productName: "Headphones", price: 60.99, quantity: 7},
    { productName: "Headphones 2", price: 75.99, quantity: 3},
    { productName: "Headphones 3", price: 39.99, quantity: 11},
    { productName: "Headphones 4", price: 19.99, quantity: 7},
    { productName: "Headphones 5", price: 25.99, quantity: 9},
    { productName: "Headphones 6", price: 20.49, quantity: 6},
]

const initializeEmployee = () => {
    let employee = {
        email: "anna@testEmployee.com",
        firstName: "Anna", 
        lastName: "Andersson", 
        role: 1, 
        isAdmin: true, 
        balance: 0,
        password: "admin12345"
    }
    return axios.post('http://127.0.0.1:2000/api/users/register', employee)
}

const initializeCompany = () => {
    let company = {
        companyName: "The Company",
        companyBalance: 0
    }
    return axios.post("http://127.0.0.1:2000/api/company/register", company, authToken)
}

const initializeProduct = (productName, price, quantity) => {
    let product = {
        productName: productName, 
        price: price, 
        quantity: quantity
    }
    return axios.post("http://127.0.0.1:2000/api/products/add", product, authToken)
}

const initializeCustomer = () => {
    let customer = {
        email: "alex@testCustomer.com",
        firstName: "Alex", 
        lastName: "Andersson", 
        role: 0, 
        isAdmin: false, 
        balance: 100,
        password: "customer123"
    }
    return axios.post('http://127.0.0.1:2000/api/users/register', customer)
}

dbInit.initializeDb = () => {
    initializeEmployee()
    .then( response => {
        authToken = {
            headers: {'Authorization': "bearer " + response.data.token}
        };
        initializeCompany()
        .then( response => {
            let i;
            for (i = 0; i < productData.length; i++) { 
                let productName = productData[i].productName;
                let price = productData[i].price;
                let quantity = productData[i].quantity;
                initializeProduct(productName, price, quantity)
            }
            initializeCustomer()
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    })
    .catch(function (error) {
        console.log(error);
    });
}

dbInit.addCreditWorker = () => {
    let dayInMilliseconds = 1000 * 60 * 60 * 24;
    setInterval(async function(){
        const users = await User.find();
        for (let i = 0; i < users.length; i++) {
        if(users[i].role === 0 && users[i].balance < 1000) {
            users[i].balance = users[i].balance + 100;
            await users[i].save();
            console.log("Added 100$ store credits to " + users[i].firstName + ' ' + users[i].lastName);
        }
        }
    }, dayInMilliseconds);
}

module.exports = dbInit;
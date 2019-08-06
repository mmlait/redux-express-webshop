module.exports = {
    'Employee: Add product': function(browser) {
        browser
            .url('localhost:3000')
            .waitForElementVisible('#loginForm')
            .setValue('#email', 'anna@testEmployee.com')
            .setValue('#password', 'admin12345')
            .click('button')
            .waitForElementVisible('#productsHeading')
            .click('#showAddProductModalBtn')
            .waitForElementVisible('#addProductForm')
            .setValue('#productName', 'Black Headphones')
            .setValue('#price', 10)
            .setValue('#quantity', 5)
            .submitForm('#addProductForm')
            .waitForElementVisible('#productAddedNotification')
    }
}
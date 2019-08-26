module.exports = {
    'Customer: Add product to shopping cart': function(browser) {
        browser
            .url('localhost:3000')
            .waitForElementVisible('#loginForm')
            .setValue('#email', 'alex@testCustomer.com')
            .setValue('#password', 'customer123')
            .click('button')
            .waitForElementVisible('#productsHeading')
            .click('.addToCartBtn')
            .waitForElementVisible('[data-test="modal"]')
    }
}
module.exports = {
    'Customer: Show empty cart': function(browser) {
        browser
            .url('localhost:3000')
            .waitForElementVisible('#loginForm')
            .setValue('#email', 'alex@testCustomer.com')
            .setValue('#password', 'customer123')
            .click('button')
            .waitForElementVisible('#showCartBtn')
            .click('#showCartBtn')
            .waitForElementVisible('#shoppingCart')
            .expect.element('#shoppingCart').text.to.contain('Your shopping cart is empty!')
    }
}
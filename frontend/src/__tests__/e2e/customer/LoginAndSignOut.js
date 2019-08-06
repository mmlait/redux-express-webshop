module.exports = {
    'Customer: Login and sign out': function(browser) {
        browser
            .url('localhost:3000')
            .waitForElementVisible('#loginForm')
            .setValue('#email', 'alex@testCustomer.com')
            .setValue('#password', 'customer123')
            .click('button')
            .waitForElementVisible('#productsHeading')
            .click('#showMenuModalBtn')
            .click('#signOutBtn')
    }
}
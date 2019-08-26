module.exports = {
    'Customer: Login error': function(browser) {
        browser
            .url('localhost:3000')
            .waitForElementVisible('#loginForm')
            .setValue('#email', 'alex@testCustomer.com')
            .setValue('#password', 'customer12')
            .click('button')
            .waitForElementVisible('#notificationModal')
            .expect.element('#notificationModal').text.to.contain('Something went wrong. Check email and password.')
    }
}
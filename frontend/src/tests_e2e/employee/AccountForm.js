module.exports = {
  'Employee: Go to account page': function(browser) {
      browser
          .url('localhost:3000')
          .waitForElementVisible('#loginForm')
          .setValue('#email', 'anna@testEmployee.com')
          .setValue('#password', 'admin12345')
          .click('button')
          .waitForElementVisible('#productsHeading')
          .click('#showMenuModalBtn')
          .click('#toAccountPageBtn')
          .waitForElementVisible('#accountForm')
  }
}
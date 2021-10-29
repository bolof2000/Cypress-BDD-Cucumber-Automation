const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
Given(/^I open login page$/, function() {
  cy.visit('http://zero.webappsecurity.com/index.html')
  cy.get('#signin_button').click()
});
When(/^I submit login$/, function() {
  cy.get('#user_login').type('username')
  cy.get('#user_password').type('password')
  cy.get('input[name="submit').click()

});
Then(/^I should see homepage$/, function() {

  cy.get('#account_summary_tab').should('be.visible')
});
Given(/^I open login page and click signin$/, function() {
  cy.visit('http://zero.webappsecurity.com/index.html')
  cy.get('#signin_button').click()
});
When(/^I enter invalid login details$/, function() {
  cy.get('#user_login').type('username1')
  cy.get('#user_password').type('password1')
  cy.get('input[name="submit').click()
});
Then(/^login Attempt should fail$/, function() {
  cy.contains('Login and/or password are wrong.').should('be.visible')
});
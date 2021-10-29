const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

import LoginPage from '/Volumes/Projects/Software Testings/Cypress-BDD-Automation/cypress/integration/pages/loginPage'
import HomePage from '/Volumes/Projects/Software Testings/Cypress-BDD-Automation/cypress/integration/pages/homePage'

//valid login
Given(/^I am on homePage$/, function() {
  LoginPage.launchUrl()

});
When(/^I enter login Details$/, function() {

  LoginPage.enterLoginDetails('username','password')

});
Then(/^I verify valid and Invalid login$/, function() {
    HomePage.verifyLogin()
});

//invalid login
Given(/^I navigate to the homepage$/, function() {
  LoginPage.launchUrl()
});
When(/^I  enter login credentials$/, function() {
  LoginPage.enterLoginDetails('username1','password1')
});
Then(/^the login attempt should failed$/, function() {
    LoginPage.invalidLogin()
});


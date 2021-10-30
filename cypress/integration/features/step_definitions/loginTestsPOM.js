const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

import LoginPageT from '/Volumes/Projects/Software Testings/Cypress-BDD-Automation/cypress/integration/pages/LoginPageT'
import HomePage from '/Volumes/Projects/Software Testings/Cypress-BDD-Automation/cypress/integration/pages/homePage'

//valid login
Given(/^I am on homePage$/, function() {
  LoginPageT.launchUrl()

});
When(/^I enter login Details$/, function() {

  LoginPageT.enterLoginDetails('username','password')

});
Then(/^I verify valid and Invalid login$/, function() {
    HomePage.verifyLogin()
});

//invalid login
Given(/^I navigate to the homepage$/, function() {
  LoginPageT.launchUrl()
});
When(/^I  enter login credentials$/, function() {
  LoginPageT.enterLoginDetails('username1','password1')
});
Then(/^the login attempt should failed$/, function() {
    LoginPageT.invalidLogin()
});


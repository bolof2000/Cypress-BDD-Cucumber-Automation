const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

import FeedbackPage from '/Volumes/Projects/Software Testings/Cypress-BDD-Automation/cypress/integration/pages/feedbackPage'

Given('I navigate to the feedback page', function() {
FeedbackPage.launchUrl()
});
When('I enters form details', function() {
    FeedbackPage.enterFeedbackFormDetails('Olusegun Bolofinde','bolofbaba@gmail.com','contac details','I want to know about withrawling')

});

Then('I see {string} in the url', url => {
     cy.url().should('include',url)
});
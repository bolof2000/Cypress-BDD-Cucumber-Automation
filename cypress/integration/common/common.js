import {defineStep} from "cypress-cucumber-preprocessor/steps";

defineStep('wait for {int} seconds', time => {
  cy.wait(time)
});
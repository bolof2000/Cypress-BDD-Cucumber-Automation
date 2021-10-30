import {defineStep} from "cypress-cucumber-preprocessor/steps";
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'
import cypress from "cypress";

defineStep('wait for {int} seconds', time => {
  cy.wait(time)
});

addMatchImageSnapshotCommand()

cypress.Commands.add('isVisible',selector =>{
  cy.get(selector).should('be.visible')
})

cypress.Commands.add('isHidden',selector =>{
  cy.get(selector).should('not.exist')
})
Cypress.Commands.add('setResolution',size =>{
  if(Cypress._.isArray(size)){
    cy.viewport(size[0],size[1])
  }else{
    cy.viewport(size)
  }
})

Cypress.Commands.add('login',(username,password) =>{
  cy.get('#login_form').should('be.visible')
  cy.get('user_login').type(username)
  cy.get('#user_password').type(password)
  cy.get('#user_remember_me').click()
  cy.contains('Sign in').click()
})

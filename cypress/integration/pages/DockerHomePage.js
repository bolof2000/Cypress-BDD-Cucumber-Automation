//todo define all constant variables for the loginPage
//todo define all methods to interact with objects within the class

import BasePage from "../../page-objects/pages/BasePage"

const URL = ''
const USERNAME = 'username'
const EMAIL = 'email'
const PASSWORD_LOCATOR = 'password'
const SUBMIT_LOCATOR = 'submit'
const TERMS_AGREEMENT = 'input[type="checkbox"]'
const REPCACHA_LOCATOR = '#[reCAPTCHA is required]'
const VALID_SIGNUP_MESSAGE = '#[username]'
const SIGNINLOCATOR = '#Sign In'
const CONTINUE_LOCATOR = '#Continue';
const VERIFY_SIGNIN_LOCATOR = '#SRepositories'
const SEARCH_LOCATOR = '#[data-testid="autocompleteInput"]'

class  SignUpPage extends BasePage{

    static search(searchTerm){
    
        cy.get(SEARCH_LOCATOR).type('{backspace}')
    }


  static signUp(username,email,password){
    cy.get(USERNAME).clear()
    cy.get(EMAIL).clear()
    cy.get(PASSWORD_LOCATOR).clear()
    cy.wait(1000)
    cy.get(USERNAME).type(username)
    cy.get(EMAIL).type(email)
    cy.get(PASSWORD_LOCATOR).type(password)
    cy.get(TERMS_AGREEMENT).check();
    cy.get(SUBMIT_LOCATOR).click();
  }

  static login(username,password) {
      cy.get(SIGNINLOCATOR).click()
      this.enterUserName(username)
      cy.get(CONTINUE_LOCATOR).click();
      this.enterPassword(password);
      cy.get(CONTINUE_LOCATOR).click();
  }

    static launchUrl(){
        cy.visit(URL)
    }
    
    static enterUserName(username){
        cy.get(USENAME).type(username)
    }
    
    static enterEmail(email){
        cy.get(EMAIL).type(email)
    }
    
    static enterPassword(password){
        cy.get(PASSWORD_LOCATOR).type(password)
    }
    
    static enterTermsAgreement(){
        cy.get(TERMS_AGREEMENT).check()
    }
    
    static submit(){
        cy.get(SUBMIT_LOCATOR).click()
    }
    
    static invalidLogin(){
        cy.contains(REPCACHA_LOCATOR).should('be.visible')
    }
    
    static validLogin(){
        cy.contains(VALID_SIGNUP_MESSAGE).should('be.visible')
    }

    static clickSignIn(){
        cy.get(SIGNINLOCATOR).click()
    }

    static verifyLogin(){
        cy.contains(VERIFY_SIGNIN_LOCATOR).should('be.visible')
    }


}

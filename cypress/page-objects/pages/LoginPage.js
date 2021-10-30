//todo identify objects
//todo define methods to interact with objects

const usernameLocator = '#user_login'
const passwordLocator = '#user_password'
const keepMeSignInLocator = '#user_remember_me'
const signInButtonLocator = 'Sign in'
const forgotPasswordLocator = 'Forgot your password ?'
const emailForForgotPasswordLocator = '#user_email'
const sendforgotPasswordLocator = 'Send Password'
const emailSentMessageLocator = 'Your password will be sent to the following email:'
const errorMessageForFailedLoginAttempt = 'Login and/or password are wrong.'
import BasePage from "../../page-objects/pages/BasePage";
class LoginPage extends BasePage{

  static login(username,password){
    cy.get(usernameLocator).clear()
    cy.get(passwordLocator).clear()
    cy.wait(1000)
    cy.get(usernameLocator).type(username)
    cy.get(passwordLocator).type(password)
    cy.contains(signInButtonLocator).click()
  }

  static loginRememberMe(username,password){
    cy.get(usernameLocator).type(username)
    cy.get(passwordLocator).type(password)
    cy.get(keepMeSignInLocator).click()
    cy.contains(signInButtonLocator).click()
  }

  static clickForgotPassword(){
    cy.contains(forgotPasswordLocator).click()
  }

  static forgotPasswordEmailSend(email){
    cy.get(emailForForgotPasswordLocator).type(email)
    cy.contains(sendforgotPasswordLocator).click()
  }

  static emailSentForForgotPassword(){
    cy.contains(emailSentMessageLocator).should('be.visible')
  }

  static invalidLoginAttempt(){
    cy.contains(errorMessageForFailedLoginAttempt).should('be.visible')
  }



}

export default LoginPage
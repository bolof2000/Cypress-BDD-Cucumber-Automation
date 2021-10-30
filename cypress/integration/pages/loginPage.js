//todo define all constant variables for the loginPage
//todo define all methods to interact with objects within the class

const URL = 'http://zero.webappsecurity.com/index.html'
const SIGNIN_LOCATOR = '#signin_button'
const USERNAME_LOCATOR = '#user_login'
const PASSWORD_LOCATOR = '#user_password'
const SUBMIT_LOCATOR = 'input[name="submit"]'
const INVALID_LOGIN_MESSAGE = 'Login and/or password are wrong. '



class LoginPage {
  static launchUrl(){
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get(SIGNIN_LOCATOR).click()
  }

  static enterLoginDetails(username,password){
    cy.get(USERNAME_LOCATOR).type(username)
    cy.get(PASSWORD_LOCATOR).type(password)
    cy.get(SUBMIT_LOCATOR).click()
  }

  static invalidLogin(){
    cy.contains(INVALID_LOGIN_MESSAGE).should('be.visible')
  }
}

export default LoginPage
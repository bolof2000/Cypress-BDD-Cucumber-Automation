//import {url} from '../../../config'
import Navbar from "../../page-objects/components/Navbar";
import LoginPage from "../../page-objects/pages/LoginPage";
import HomePage from "../../page-objects/pages/HomePage";

//todo write each tests in a describe statement

//todo Invalid login attempt
const url = 'http://zero.webappsecurity.com/index.html'

describe('Invalid Login Attempt',()=> {
  before(function() {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it("should try to login with Invalid credentials", function() {

    LoginPage.login('test','test01')
  });

  it("should verify login fails with message", function() {
      LoginPage.invalidLoginAttempt()
  });
})

describe('valid login',() =>{

  before(function() {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  //todo user login
  it("should login user", function() {
    LoginPage.login('username','password')
  });


})


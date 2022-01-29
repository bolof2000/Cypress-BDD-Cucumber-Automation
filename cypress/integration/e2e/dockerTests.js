import { describe } from 'mocha';
import {url} from '../../../config'
import DockerHomePage from "../../page-objects/pages/DockerHomePage";


describe('Signup Attempt',()=> {
  before(function() {
    cy.visit(url)
  })

  //this signup failed due to the captcha turned on 
  it("should verify signup attempt failed ", function() {

    DockerHomePage.signUp("lesley001","ovbolofinde@gmail.com","Testman2k")
    DockerHomePage.invalidLogin();
  });

  
  // this should verify a successful signup attempt if no recpatcha is required 
  it("should verify successful signup attempt", function() {
    DockerHomePage.signUp("lesley001","ovbolofinde@gmail.com","Testman2k")
    DockerHomePage.verifySingUp();
  });

})

describe('Login Attempt',() =>{

  before(function() {
    cy.visit(url)
  
  })

  //todo user login
  it("should verify successful  login by user", function() {
    DockerHomePage.login("lesley001","Testman2k")
    DockerHomePage.verifyLogin();
  });

  it ("should verify login failed by user", function() {
    DockerHomePage.login("lesley001","Testman2k")
    DockerHomePage.invalidLogin();
  });

})


describe ('verify search results',() =>{ 

  it ('should verify search results',() =>{
    DockerHomePage.search('nodejs')
    DockerHomePage.verifySearchResults('nodejs');
  });
})



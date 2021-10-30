//todo - Navbar components is common accross all pages - its shared
//todo identify the locators, and write methods to interact with the objects

const logoLocator = 'Zero Bank'
const searchMenuLocator = '#searchTerm'
const signInLocator = '#signin_button'

class Navbar {

  //todo methods to interact with objects
  static clickLogo(){
    cy.contains(logoLocator).click()
  }

  static searchText(text) {
    cy.get(searchMenuLocator).type('${text} {enter}')
  }

  static clickSignIn(){
    cy.get(signInLocator).click()
  }
}
export default Navbar
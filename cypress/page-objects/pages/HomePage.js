const usernameHomePageLocator = 'username'

class HomePage {
  static verifyUserLogon(){
    cy.contains(usernameHomePageLocator).should('be.visible')
  }
}
export default HomePage
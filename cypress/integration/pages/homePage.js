//todo identify locators
//todo define methods to interact with objects

const accountSummaryTabLocator = '#account_summary_tab'

class HomePage{

  static verifyLogin(){
   cy.get(accountSummaryTabLocator).should('be.visible')
  }
}

export default HomePage
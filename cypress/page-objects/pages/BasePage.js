//todo abstract common operations to all tests- wait, logs, devices, browsers

class BasePage {
  static pause(waitTime){
    cy.wait(waitTime)
  }

  static setMobileViewPort(){
    cy.viewport('iphone-x')
  }
  static setTableViewPort(){
    cy.viewport('ipad-mini')
  }

  static setDesktopViewPort(){
    cy.viewport('macbook-16')
  }

  static setLargeDesktopViewPort(){
    cy.viewport(1980,1080)
  }

  static logInfo(message){
    cy.log(message)
  }
}
export default BasePage
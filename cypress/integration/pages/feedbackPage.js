//todo identify all locators as variable
const FEEDBACK_LOCATOR = 'Feedback'
const NAME_LOCATOR = '#name'
const EMAIL_LOCATOR = '#email'
const SUBJECT_LOCATOR = '#subject'
const COMMENT_LOCATOR = '#comment'
const  SEND_MESSAGE = 'Send Message'

//todo implement methods to interact with objects

class FeedbackPage {
  static launchUrl(){
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.contains(FEEDBACK_LOCATOR).click()
  }
  static enterFeedbackFormDetails(name,email,subject,comment){
    cy.get(NAME_LOCATOR).type(name)
    cy.get(EMAIL_LOCATOR).type(email)
    cy.get(SUBJECT_LOCATOR).type(subject)
    cy.get(COMMENT_LOCATOR).type(comment)
    cy.contains(SEND_MESSAGE).click()

  }
}

export default FeedbackPage


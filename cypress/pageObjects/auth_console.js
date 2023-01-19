class AuthConsole {
  mainUrl = "https://marketplace.staging.myautochek.com/ng";
  url = "https://console.autochek.africa";
  emailBox = "#email";
  passwordBox = "#password";
  submitLoginBtn = ".Button__Container-sc-jbfzzv-0";
  loginInButton = ".button";
  loggedInPage = ".profile-menu > :nth-child(2)";
  loggedInUrl = "https://console.autochek.africa/dashboard";
  errorMsg = ".ant-message-notice-content";
  signInPage = "https://marketplace.staging.myautochek.com/en/ng";
  signProdPage = "https://autochek.africa/en/ng";
  authUrl = "https://console.autochek.africa/login";
  email = "developers@autochek.africa";
  password = "wZxycjbMF";
  errorTxt = "User not found. Please sign up"
  
//  get the main page

  visitConsole() {
    cy.visit(this.url);
  }

  fillEmailAndPassword(email, password) {
      cy.get(this.emailBox)
        .clear()
        .should('be.empty')
        .type(email);
      cy.get(this.passwordBox)
        .should('be.visible')
        .clear()
        .type(password);
  }


fillInvalidEmailAndPassword(email, password) {
  cy.get(this.emailBox)
    .clear()
    .should('be.empty')
    .type(email);
  cy.get(this.passwordBox)
    .should('be.visible')
    .clear()
    .type(password);
    
}

  clickSignInButton() {
    cy.get(this.submitLoginBtn)
      .should('exist')
      .click()
  }
 
  verifyDashboard() {
    cy.url().should('eq', this.loggedInUrl);
    cy.get('h1')
      .should('exist')
      .should('contain.text', 'Welcome, Dashboard')
  }

  verifyLoginErrorPage() {
    cy.url().should("eq", this.authUrl);
    cy.get(this.errorMsg)
    .should("exist");
    cy.get(this.errorMsg).should("include.text", "User not found. Please sign up")
  }

  verifySignout() {
    cy.url().should("eq", this.authUrl);
  }

  clickSignOut() {
    cy.get('.ant-dropdown-trigger')
      .should('exist')
      .click();

    cy.get('.ant-dropdown-menu-title-content')
    .should('exist')
      .click();
    
  }

  clickLoanMenu() {
    cy.get('.sidebar-toggler')
    .should('exist')
      .click();

      cy.get(':nth-child(8) > .sidebar-item > .app-cover > span > .sidebar-link')
      .should('exist')
      .click();
  }

  listAllLoan() {
    cy.get('.loan-heading')
    .should('exist')
      .should("include.text", 'All Loan Request');
  }

}

export default AuthConsole;

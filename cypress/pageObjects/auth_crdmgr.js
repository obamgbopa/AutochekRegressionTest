class CreditManager {
  mainUrl = "https://marketplace.staging.myautochek.com/ng";
  url = "https://credit.autochek.africa";
  emailBox = ":nth-child(1) > .border-gray-100";
  passwordBox = ":nth-child(2) > .border-gray-100";
  submitLoginBtn = ".bg-button-variants-primary-scene";
  loginInButton = ".button";
  loggedInPage = ".profile-menu > :nth-child(2)";
  loggedInUrl = "https://credit.autochek.africa/loans/pending-approval?country=NG";
  errorMsg = ".Toastify__toast-body > :nth-child(1) > div";
  signInPage = "https://marketplace.staging.myautochek.com/en/ng";
  signProdPage = "https://autochek.africa/en/ng";
  authUrl = "https://credit.autochek.africa/auth/sign-in";
  email = "oluwaseun+prdbkad@autochek.africa";
  password = "P@ssw0rd"
//  get the main page

  visitCreditManager() {
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
  }

  verifyLoginErrorPage() {
    cy.url().should("eq", this.authUrl);
    cy.get(this.errorMsg)
    .should("exist");
    cy.get(this.errorMsg).should("include.text", "User not found. Please sign up")
  }

  verifySignout() {
    cy.url().should("eq", this.authUrl);
    /*cy.get(this.errorMsg)
    .should("exist");
    cy.get(this.errorMsg).should("include.text", "User not found. Please sign up")*/
  }

  clickSignOut() {
    cy.get('.w-6')
      .should('exist')
      .click();

    cy.get('#headlessui-menu-item-\\:r4\\:')
      .should('exist')
      .click();
  }

}

export default CreditManager;

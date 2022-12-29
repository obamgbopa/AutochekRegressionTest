class AuthPage {
  mainUrl = "https://marketplace.staging.myautochek.com/ng";
  prodUrl = "https://autochek.africa/ng";
  SigninNavItem = "a[href='/en/ng/auth/login']";
  emailBox = "input[name=\"email\"]";
  passwordBox = "input[name=\"password\"]";
  submitLoginBtn = "button[type=submit]";
  loginInButton = ".button";
  loggedInPage = ".profile-menu > :nth-child(2)";
  errorMsg = "#swal2-content";
  
  //loggedInPage = "a[text='Sign Out']"; <a class="">Sign Out</a> 
  // #__next > div > div.header.hide- > div.menu-container > div > div.profile-menu > a:nth-child(2) 
  // #__next > div > div.main-wrapper > div > div > div.content > form > div.social-buttons > div:nth-child(1) > div > input
  //loggedInPage = "a[href='en/ng/profile']";
  signInPage = "https://marketplace.staging.myautochek.com/en/ng";
  signProdPage = "https://autochek.africa/en/ng";
  authUrl = "https://autochek.africa/en/ng/auth/login";
  prodemail = "oluwaseun.b+dsa1@autochek.africa";
  prodpassword = "P@ssw0rd";
  email = "oluwaseun.b@autochek.africa";
  password = "P@ssw0rd"
//  get the main page

  visitNigeriaPage() {
    cy.visit(this.mainUrl);
  }
  visitProdNigeriaPage() {
    cy.visit(this.prodUrl);
  }

  visitSignInPage() {
    cy.get(this.SigninNavItem).should('be.visible').should('exist').click()
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

  fillProdEmailAndPassword(prodemail, prodpassword) {
    cy.get(this.emailBox)
      .clear()
      .should('be.empty')
      .type(prodemail);
    cy.get(this.passwordBox)
      .should('be.visible')
      .clear()
      .type(prodpassword);
      
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
 

  verifyLoggedPage() {
    cy.url().should("eq", this.signInPage);
    //cy.get(this.loggedInPage)
    //  .should("exist");
  }

  verifyProdLoggedPage() {
    cy.url().should("eq", this.signProdPage);
    //cy.get(this.loggedInPage)
    //  .should("exist");
  }

  verifyLoginErrorPage() {
    cy.url().should("eq", this.authUrl);
    cy.get(this.errorMsg)
    .should("exist");
    cy.get(this.errorMsg).should("include.text", "User not found. Please sign up")
  }

}

export default AuthPage;

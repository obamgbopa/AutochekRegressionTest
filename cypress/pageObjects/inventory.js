class InventoryPage {
  mainUrl = "https://marketplace.staging.myautochek.com/ng";
  prodUrl = "https://autochek.africa/ng";
  SigninNavItem = "a[href='/en/ng/auth/login']";
  emailBox = "input[name=\"email\"]";
  passwordBox = "input[name=\"password\"]";
  submitLoginBtn = "button[type=submit]";
  loginInButton = ".button";
  loggedInPage = ".profile-menu > :nth-child(2)";
  myCar = ".button-group > [href='/en/ng/cars-for-sale']";
  
  //loggedInPage = "a[text='Sign Out']"; <a class="">Sign Out</a> 
  // #__next > div > div.header.hide- > div.menu-container > div > div.profile-menu > a:nth-child(2) 
  // #__next > div > div.main-wrapper > div > div > div.content > form > div.social-buttons > div:nth-child(1) > div > input
  //loggedInPage = "a[href='en/ng/profile']";
  signInPage = "https://marketplace.staging.myautochek.com/en/ng";
  signProdPage = "https://autochek.africa/en/ng";
  prodemail = "oluwaseun.b+001@autochek.africa";
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

  carsForSalePage() {
    cy.get(this.myCar).should('be.visible').should('exist').click()
  }

  searchCarPage() {
    cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').clear('t');
    cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').type('toyota');
    cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').clear('toyota{enter}');
    cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').type('toyota{enter}');
    cy.get(':nth-child(1) > .car-item > a > .car-item-header > .info > .flex > .name').should('include.text', 'Toyota');
    //cy.get(':nth-child(9) > .car-item > a > .car-item-header > .info > .flex > .name').should('include.text', 'Toyota');
    //cy.get(this.carsForSale).should('be.visible').should('exist').click()
  }

  verifyCarPage() {
    cy.get('.tw-text-2xl').click();
    cy.get('.tw-text-2xl').should('have.text', 'Cars for sale in Nigeria');
    cy.get(':nth-child(1) > .car-item > .car-item-footer > button > span').should('have.text', 'Apply for loan');
  }


}

export default InventoryPage;

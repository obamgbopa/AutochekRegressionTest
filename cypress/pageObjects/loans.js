class LoansPage {
  mainUrl = "https://marketplace.staging.myautochek.com/ng";
  prodUrl = "https://autochek.africa/ng";
  registerNavItem = "a[href='/en/ng/auth/register']";
  SigninNavItem = "Sign In";
  registerButton = ".button";
  loginInButton = ".button";
  successText = ".success > p";
  successPage = "https://marketplace.staging.myautochek.com/ng/auth/success";
  successProdPage = "https://autochek.africa/ng/auth/success";
  myCar = ".button-group > [href='/en/ng/cars-for-sale']";
  firstName = ":nth-child(1) > .form-row > :nth-child(1) > div > .input";
  lastName = ":nth-child(1) > .form-row > :nth-child(2) > div > .input";
  dob = ".mb-25 > div > .input";
  email = ":nth-child(4) > div > .input";
  phoneNumber = ".react-phone-input";
  employerName = ":nth-child(3) > .form-row > :nth-child(1) > div > .input";
  bvnNumber = ":nth-child(3) > .form-row > :nth-child(3) > div > .input";
  salary = ":nth-child(3) > .form-row > :nth-child(2) > div > .input";
  governmentID = ":nth-child(1) > .input-container > .file-uploader > input";
  employmentLetter = ":nth-child(2) > .input-container > .file-uploader > input";
  acctStatement = ":nth-child(3) > .input-container > .file-uploader > input";
  noAcctPass = ":nth-child(3) > .radio > input";
  loanSbmBtn = "#gtm-car-loan-personal-details-submit-btn";



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

  verifyCarPage() {
    cy.get('.tw-text-2xl').click();
    cy.get('.tw-text-2xl').should('have.text', 'Cars for sale in Nigeria');
    cy.get(':nth-child(1) > .car-item > .car-item-footer > button > span').should('have.text', 'Apply for loan');
  }

  applyBtn() {
    cy.get(':nth-child(1) > .car-item > .car-item-footer > #gtm-car-listing-apply-for-loan-btn > span')
    .click();
    cy.get('#gtm-car-loan-process-request-btn').click();
  }

  applyPreBtn() {
    
    cy.get('a > .primary-button')
    .should('exist')
    .click();
  }

  selectProduct() {
    cy.get('#gtm-car-loan-documents-apply-now-btn').click();
    cy.get('.title > .text')
    .should('exist')
    .should('include.text', 'Autochek Auto Financing')
  }

  preQualify() {
    cy.get('.button-group > [href="/en/ng/get-prequalified"]')
    .should('exist')
    .click();
  }

  fillFirstAndLastName(firstName, lastName) {
    cy.get(this.firstName)
      .clear()
      .type(firstName);
    cy.get(this.lastName)
      .clear()
      .type(lastName);
  }

  fillDobAndEmailAndPhone(dob, email,phone) {
    cy.get(this.dob)
      .clear()
      .type(dob);
    cy.get(this.email)
      .clear()
      .type(email);
    cy.get(this.phoneNumber)
      .clear()
      .type(phone);
  }
  fillAboutUsAndStateCity() {
    cy.get(':nth-child(6) > .-invalid')
      .click();
    cy.get('#react-select-2-option-0')
      .should("exist")
      .click();
    cy.get(':nth-child(1) > .-invalid')
      .click();
    cy.get('#react-select-5-option-1')
      .should("exist")
      .click();
    cy.get(':nth-child(2) > .-invalid > .css-15xv4ds-control > .css-1hwfws3')
      .click();
    cy.get('#react-select-6-option-2')
      .should("exist")
      .click();
  }

  fillEmploymentInformation(employerName, bvnNumber,salary) {
    cy.get(this.employerName)
      .clear()
      .type(employerName);
    cy.get(this.bvnNumber)
      .clear()
      .type(bvnNumber);
    cy.get(this.salary)
      .clear()
      .type(salary);

    cy.get('.-invalid')
      .click();
    cy.get('#react-select-7-option-3')
      .click();
  }
  completeRegistrationFlow() {
    cy.get(this.governmentID)
      .selectFile('cypress/fixtures/image1.png', { force: true });
    cy.get(this.employmentLetter)
      .selectFile('cypress/fixtures/image1.png', { force: true });
    cy.get(this.acctStatement)
      .selectFile('cypress/fixtures/acctstat.pdf', { force: true });
    cy.get(':nth-child(3) > .radio > .radio-display')
      .click();
    cy.get(':nth-child(3) > .radio > input')
      .check();

    cy.get(this.loanSbmBtn)
      .should("exist")
      .click();
  }
  verifySuccessPage() {
    cy.get('.title')
      .should("exist")
      .should('have.text', 'Loan Completed!');
    cy.get('[style="font-weight: normal;"]')
      .should("exist")
      .should('have.text', 'Your loan application has been completed.');
  }
 
}

export default LoansPage;

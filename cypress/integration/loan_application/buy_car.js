describe('Loan Application', () => {
    it('Buy a car',function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://autochek.africa/ng');
        cy.get('.button-group > [href="/en/ng/cars-for-sale"]').click();
        cy.get('.tw-text-2xl').should('have.text', 'Cars for sale in Nigeria');
        cy.get(':nth-child(2) > .tw-capitalize').should('have.text', 'cars for sale ');
        cy.get(':nth-child(2) > .tw-capitalize').should('be.visible');
        cy.get(':nth-child(1) > .car-item > .car-item-footer > #gtm-car-listing-apply-for-loan-btn > span').should('be.visible');
        cy.get(':nth-child(1) > .car-item > .car-item-footer > #gtm-car-listing-apply-for-loan-btn > span').should('have.text', 'Apply for loan');
        cy.get(':nth-child(1) > .car-item > .car-item-footer > #gtm-car-listing-apply-for-loan-btn > span').click();
        cy.get('.original-value').should('be.visible');
        cy.get(':nth-child(2) > .icon > svg').should('be.visible');
        cy.get(':nth-child(3) > .value').should('be.visible');
        cy.get('#gtm-car-loan-process-request-btn').should('be.visible');
        cy.get('#gtm-car-loan-process-request-btn').should('be.enabled');
        cy.get('#gtm-car-loan-process-request-btn').click();
        cy.get('#gtm-car-loan-documents-apply-now-btn').should('be.visible');
        cy.get('#gtm-car-loan-documents-apply-now-btn').click();
        cy.get(':nth-child(1) > .form-row > :nth-child(1) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('John');
        cy.get(':nth-child(1) > .form-row > :nth-child(2) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('James');
        cy.get('.mb-25 > div > .input').clear();
        cy.get('.mb-25 > div > .input').type('1986-03-23');
        cy.get(':nth-child(4) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('johnjames@dispostable.com');
        cy.get('.react-phone-input').clear('+234 3');
        cy.get('.react-phone-input').type('+234 345 366 677 7');
        cy.get(':nth-child(6) > .-invalid').click();
        cy.get('#react-select-2-option-0').click();
        cy.get(':nth-child(1) > .-invalid').click();
        cy.get('#react-select-3-option-1').click();
        cy.get(':nth-child(2) > .-invalid > .css-15xv4ds-control > .css-1hwfws3').click();
        cy.get('#react-select-4-option-2').click();
        cy.get(':nth-child(3) > .form-row > :nth-child(1) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('Autochek');
        cy.get(':nth-child(3) > .form-row > :nth-child(2) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('3288990');
        cy.get(':nth-child(3) > .form-row > :nth-child(3) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('2324445456566644333');
        cy.get('.-invalid').click();
        cy.get('#react-select-5-option-3').click();
        cy.get(':nth-child(1) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
        cy.get(':nth-child(2) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
        cy.get(':nth-child(3) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
        cy.get('.input-container.mb-25 > .mb-25').should('be.visible')
        cy.get(':nth-child(3) > .radio > .radio-display').click();
        cy.get('#gtm-car-loan-personal-details-submit-btn').should('be.visible').click();
        cy.get('.title').should('be.visible').should('have.text', 'Loan Completed!');
        cy.get('[style="font-weight: normal;"]').should('have.text', 'Your loan application has been completed.');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('loan application ', function() {
      /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://autochek.africa/ng');
        cy.get('.button-group > [href="/en/ng/get-prequalified"]').click();
      //cy.get('.container > .action > .primary-button').click();
        cy.get('a > .primary-button').click();
        cy.get(':nth-child(1) > .form-row > :nth-child(1) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('Admas');
        cy.get(':nth-child(1) > .form-row > :nth-child(2) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('James');
        cy.get('.mb-25 > div > .input').clear();
        cy.get('.mb-25 > div > .input').type('3667-02-23');
        cy.get(':nth-child(4) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('johnjames@dispostable.com');
        cy.get('.react-phone-input').clear('+234 3');
        cy.get('.react-phone-input').type('+234 345 366 677 7');
        cy.get(':nth-child(6) > .-invalid').click();
        cy.get('#react-select-2-option-0').click();
        cy.get(':nth-child(1) > .-invalid').click();
        cy.get('#react-select-3-option-1').click();
        cy.get(':nth-child(2) > .-invalid > .css-15xv4ds-control > .css-1hwfws3').click();
        cy.get('#react-select-4-option-2').click();
        cy.get(':nth-child(3) > .form-row > :nth-child(1) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('Autochek');
        cy.get(':nth-child(3) > .form-row > :nth-child(2) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('3288990');
        cy.get(':nth-child(3) > .form-row > :nth-child(3) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('2324445456566644333');
        cy.get('.-invalid').click();
        cy.get('#react-select-5-option-3').click();
        cy.get(':nth-child(1) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
        cy.get(':nth-child(2) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
        cy.get(':nth-child(3) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
        cy.get('.input-container.mb-25 > .mb-25').should('be.visible')
        cy.get(':nth-child(3) > .radio > .radio-display').click();
        cy.get('#gtm-car-loan-personal-details-submit-btn').should('be.visible').click();
        cy.get('.title').should('be.visible').should('have.text', 'Loan Completed!');
        cy.get('[style="font-weight: normal;"]').should('have.text', 'Your loan application has been completed.');
      /* ==== End Cypress Studio ==== */
    });
  
    /* ==== Test Created with Cypress Studio ==== */
    it('business_owner_loan_app', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://autochek.africa/ng');
      cy.get('.button-group > [href="/en/ng/get-prequalified"]').click();
      cy.get('.loan-type-switch > :nth-child(2) > p').click();
      cy.get('a > .primary-button').click();
      cy.get(':nth-child(1) > .form-row > :nth-child(2) > div > .input').click();
        cy.get('.isFocused > div > .input').clear();
        cy.get('.isFocused > div > .input').type('James');
      cy.get(':nth-child(1) > .form-row > :nth-child(1) > div > .input').click();
      cy.get('.isFocused > div > .input').clear();
      cy.get('.isFocused > div > .input').type('Johnson');
      cy.get('.mb-25 > div > .input').clear();
      cy.get('.mb-25 > div > .input').type('5747-05-23');
      cy.get(':nth-child(4) > div > .input').click();
      cy.get('.isFocused > div > .input').clear();
      cy.get('.isFocused > div > .input').type('adamjohn@dispostable.com');
      cy.get('.react-phone-input').clear('+234 3');
      cy.get('.react-phone-input').type('+234 324 546 657 8');
      cy.get(':nth-child(6) > .-invalid').click();
      cy.get('#react-select-2-option-0').click();
      cy.get(':nth-child(7) > .-invalid').click();
      cy.get('#react-select-3-option-1').click();
      cy.get(':nth-child(1) > .-invalid > .css-15xv4ds-control > .css-1hwfws3').click();
      cy.get('#react-select-4-input').clear();
      cy.get('#react-select-4-input').type('l');
      cy.get('#react-select-4-option-25').click();
      cy.get(':nth-child(2) > .form-row > :nth-child(2) > .-invalid > .css-15xv4ds-control > .css-1hwfws3').click();
      cy.get('#react-select-5-option-4').click();
      cy.get(':nth-child(3) > .form-row > :nth-child(1) > div > .input').click();
      cy.get('.isFocused > div > .input').clear();
      cy.get('.isFocused > div > .input').type('Admaks');
      cy.get(':nth-child(2) > .-invalid > .css-15xv4ds-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click();
      cy.get('#react-select-6-option-4').click();
      cy.get(':nth-child(3) > .form-row > :nth-child(3) > div > .input').click();
      cy.get('.isFocused > div > .input').clear();
      cy.get('.isFocused > div > .input').type('4366377784842');
      cy.get('.-invalid').click();
      cy.get('#react-select-7-option-3').click();
      cy.get(':nth-child(1) > .input-container > .file-uploader > .secondary-button > .text').click();
      cy.get(':nth-child(1) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
      cy.get(':nth-child(2) > .input-container > .file-uploader > .secondary-button').click();
      cy.get(':nth-child(2) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
      cy.get(':nth-child(3) > .input-container > .file-uploader > .secondary-button > .text').click();
      cy.get(':nth-child(3) > .input-container > .file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
      cy.get('.secondary-button > .text').click();
      cy.get('.file-uploader > input').selectFile('cypress/fixtures/acctstat.pdf', { force: true });
      cy.get(':nth-child(3) > .radio > .radio-display').click();
      cy.get(':nth-child(3) > .radio > input').check();
      cy.get('.primary-button').click();
      /* ==== End Cypress Studio ==== */
    });
  })

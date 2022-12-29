  describe('Loan Application', () => {
  
    it.only('buycar', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://autochek.africa/ng');
        cy.get('.button-group > [href="/en/ng/get-prequalified"]').click();
        cy.get('a > .primary-button').click();
        cy.get('.logo > img').click();
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
        /* ==== End Cypress Studio ==== */
    });
  })



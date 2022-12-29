describe('Inventory Verification', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('buy_truck', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://autochek.africa/ng');
        cy.get('.sell-car > .section-content > .button-group > .primary-button').click();
        cy.get('.tw-text-2xl').should('have.text', 'Truck  for Sale in Nigeria');
        cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').should('have.value', 'truck');
        /* ==== End Cypress Studio ==== */
      });
  
    /* ==== Test Created with Cypress Studio ==== */
    it('Open inventory ', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://autochek.africa/ng');
      cy.get('.button-group > [href="/en/ng/cars-for-sale"]').click();
      cy.get('.tw-text-2xl').click();
      cy.get('.tw-text-2xl').should('have.text', 'Cars for sale in Nigeria');
      cy.get(':nth-child(1) > .car-item > .car-item-footer > button > span').should('have.text', 'Apply for loan');
      cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').clear('t');
      cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').type('toyota');
      cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').clear('toyota{enter}');
      cy.get('.search > :nth-child(2) > .input-container > .input-icon-container > .input').type('toyota{enter}');
      cy.get(':nth-child(1) > .car-item > a > .car-item-header > .info > .flex > .name').should('include.text', 'Toyota');
      //cy.get(':nth-child(9) > .car-item > a > .car-item-header > .info > .flex > .name').should('include.text', 'Toyota');
      /* ==== End Cypress Studio ==== */
    });
  })
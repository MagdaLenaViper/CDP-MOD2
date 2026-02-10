
    describe('My second scenario', () => {
  it('go to Cypress course and make screenshot', function() {
    cy.visit('https://fabrykatestow.pl/')


    cy.get('a[href*="cypress"]')
      .contains('POKAŻ CZEGO SIĘ NAUCZĘ')
      .click()
    cy.url().should('eq', 'https://fabrykatestow.pl/cypress/')

    /* ? prze'scroll'ować się do sekcji "KTO NAUCZY CIĘ TESTÓW AUTOMATYCZNYCH?" */
    cy.contains('.elementor-heading-title', 'Kto nauczy Cię testów automatycznych?')
    .closest('.elementor-section')
    .scrollIntoView({ block: 'center' })
    .should('be.visible')
    cy.wait(1000)
    cy.contains('.elementor-heading-title', 'Kto nauczy Cię testów automatycznych?')
    .closest('.elementor-section')
    .screenshot('kto-nauczy-cie-testow') // Zapisz screenshot z nazwą "kto-nauczy-cie-testow-automatycznych.png" w folderze "cypress/screenshots"

    
    /* ? zrobić screenshot */
   // cy.screenshot()

    /* ? zapisać ten screenshot na dysku */


  })
})


						
describe ('our test', () => {
    beforeEach(() => {
        cy.visit ('https://fabrykatestow.pl')
    })
  /*  it ('test',() => {
        cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!').click()
    })*/


        // po tekscie

it('by text',() => {

cy.get('span').contains('Zobacz co oferujemy').click()
cy.get('span').contains('Sprawdź nasze kursy').click()
cy.get('span').contains('Bądź na bieżąco').click()
cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()

})

// po id
it ('by id',() => {
    
cy.get('#menu-6456e4d').click()
cy.get('#menu-6456e4d').click()
cy.get('#menu-6456e4d').click()
cy.get('#menu-6456e4d').click() 
}
)

// po klasie

it('by class',() => {

cy.get('.elementor-button-text').contains('Zobacz co oferujemy').click()
cy.get('.elementor-button-text').contains('Sprawdź nasze kursy').click()
cy.get('.elementor-button-text').contains('Bądź na bieżąco').click()
cy.get('.elementor-button-text').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()

}
)



// po atrybucie

it('by attribute',() => {

cy.get('[data-id="12345"]').click()
cy.get('[data-id="23456"]').click()
cy.get('[data-id="34567"]').click()
cy.get('[data-id="45678"]').click()

}           



)
} )

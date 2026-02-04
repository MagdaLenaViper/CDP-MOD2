

describe ('our test', () => {
    beforeEach(() => {
        cy.visit ('https://fabrykatestow.pl')
    })
    it ('test',() => {
        cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!').click()
    })
})


//<span class="elementor-button-text">ZAPISZ MNIE NA NEWSLETTER!</span> -->

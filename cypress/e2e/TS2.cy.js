describe ('My second scenario', () => {
    it ('go to Cypress course and make screenshot', function() {
        cy.visit ('https://fabrykatestow.pl/')

        /*cy.get ('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ')
        .eq(1) 
        .click()
        */
       cy.contains('span', 'POKAŻ CZEGO SIĘ NAUCZĘ').eq(1).click()

        cy.url().should('eq', 'https://fabrykatestow.pl/cypress/')
    })
    })

    // <ul id="nv-primary-navigation-main" class="primary-menu-ul nav-ul menu-desktop"><li id="menu-item-923" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-923"><div class="wrap"><a href="https://fabrykatestow.pl/ciekawostki/">Newsletter</a></div></li>
// <span class="elementor-button-text">POKAŻ CZEGO SIĘ NAUCZĘ</span>
//<a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="https://fabrykatestow.pl/cypress">
						
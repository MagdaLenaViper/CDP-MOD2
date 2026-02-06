describe ('My fisrt scenario', () => {
    it ('visit main page and click top menu botton', function() {
        cy.visit (`https://fabrykatestow.pl`)

        cy.get ('#nv-primary-navigation-main').contains('Newsletter').click()

        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')
    })
    })

    // <ul id="nv-primary-navigation-main" class="primary-menu-ul nav-ul menu-desktop"><li id="menu-item-923" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-923"><div class="wrap"><a href="https://fabrykatestow.pl/ciekawostki/">Newsletter</a></div></li>

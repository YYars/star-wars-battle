describe('Game view', () => {

    beforeEach(() => {
        cy.server();

        cy.visit('/');

        // Game view will be shown after clicking on button 'Start Game!'
        cy.get('button').click();
    });

    it('should display a header', () => {
        cy.get('h1').should('be.visible').should('contain', 'Star Wars Battle')
    });

    it('should not display 3 parts of intro', () => {
        cy.get('h3').should('not.have.length', 3);
    });

    it('should display toggle slider', () => {
        cy.get('.mat-slide-toggle').should('be.visible');
    });

    it('should display 0 : 0 score', () => {
        cy.get('#score h1').should('be.visible').invoke('text').should('eq', '0 : 0');
    });

    it('should display button with "Roll the dice!" text', () => {
        cy.get('button').should('contain', 'Roll the dice!');
    });

    it('should not display cards if user didn`t click on button', () => {
        cy.get('.mat-card').should('not.be.visible');
    });

    it('should display cards after clicking on "Roll the dice!" button', () => {
        cy.fixture('characters-page.json').as('charactersPage');
        cy.route('https://swapi.co/api/people/*', '@charactersPage').as('characters');
        cy.get('button').click();
        cy.wait('@characters');
        cy.get('.mat-card').should('be.visible').should('have.length', 2);

    });

    it('should update score after showing winner card', () => {
        cy.fixture('characters-page.json').as('charactersPage');
        cy.route('https://swapi.co/api/people/?page=*', '@charactersPage').as('characters');
        cy.get('#score h1').invoke('text').then((initialScore) => {
            cy.get('button').click();
            cy.wait('@characters');
            cy.get('#score h1').should('be.visible').invoke('text').should('not.eq', initialScore);
        });
    });

    context('when toggle is switched (starships battle)', () => {

        beforeEach(() => {
            cy.fixture('starships-page.json').as('starshipsPage');
            cy.route('https://swapi.co/api/starships/?page=*', '@starshipsPage').as('starships');
            cy.get('mat-slide-toggle').click();
        });

        it('should display starships cards after clicking on "Roll the dice!" button', () => {
            cy.get('button').click();
            cy.wait('@starships');
            cy.get('.mat-card').should('be.visible').should('have.length', 2);
        });

        it('should update score after showing winner card', () => {
            cy.get('#score h1').invoke('text').then((initialScore) => {
                cy.get('button').click();
                cy.wait('@starships');
                cy.get('#score h1').should('be.visible').invoke('text').should('not.eq', initialScore);
            });
        });
    });
});

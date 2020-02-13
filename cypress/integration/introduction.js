describe('Introduction view', () => {

    beforeEach(() => {
        // Mock backend
        cy.server();

        cy.visit('/');
    });

    it('should display a header', () => {

        cy.get('h1').should('be.visible').should('contain', 'Star Wars Battle');

    });

    it('should display 3 parts of intro', () => {
        cy.get('h3').should('have.length', 3);
    });

    it('should display button with "Start Game!" text', () => {
        cy.get('button').should('contain', 'Start Game!');
    });
});

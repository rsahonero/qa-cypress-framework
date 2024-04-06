describe('Cart feature', () => {

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
    });
    it('TC-007: FE | Add new product cart', () => {
        cy.get('.success > :nth-child(1) > img').should('be.visible');
        cy.screenshot();
    });

    it('TC-008: FE | Delete  product cart', () => {
        cy.get('.success > :nth-child(4) > a').click();
        cy.get('.success > :nth-child(1) > img').should('be.visible');
        cy.screenshot();
    });
});
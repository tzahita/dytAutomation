import * as cons from '../const.js';
describe('Change section by value - US', () => {
    before(() => {
        sessionStorage.clear();
        localStorage.clear();
        cy.clearCookies()
        cy.visit(cons.BASE_URL);
        cy.contains(cons.CONTEXT_HOMEPAGE);
    })
    it('Init US section', () => {
        cy.get(cons.$SECTION_ID).type(cons.US_SECTION_ID);
        cy.get(cons.$SECTION_BUTTON).click();
        cy.url().should('eq', cons.BASE_URL_US_PARAM)
    })
    it('Validate DY and DYO exist on window', () => {
        cy.window().should('have.property', cons.DYO)
        cy.window().should('have.property', cons.DY)
    })
    it('Validate and close overlay', () => {
        cy.contains(cons.US_OVERLAY_TEXT);
        cy.get(cons.X_US_OVERLAY).click();
    })
    it('Validate header', () => {
        cy.get(cons.$HEADER_SECTION_ID).contains(cons.US_SECTION_ID);
        cy.get(cons.$HEADER_CONTEXT_ID).contains(cons.CONTEXT_HOMEPAGE);
        cy.get(cons.$HEADER_SCRIPT_ID).contains(cons.SCRIPT_VERSION); 
    })

})
import * as cons from '../const.js';

describe('E2E', () => {

    before(() => {
        cy.visit(cons.BASE_URL);
        cy.contains(cons.CONTEXT_HOMEPAGE);
    })
    it('Init US section', () => {
        expect(true).to.equals(true)
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
    it('Change context', () => {
        cy.get(cons.$CONTEXT_DD).select(cons.CONTEXT_PRODUCT) 
        cy.get(cons.$CONTEXT_DATA).type(cons.CONTEXT_DATA_US) 
        cy.get(cons.$CONTEXT_BUTTON).click()
        cy.get(cons.$HEADER_CONTEXT_ID).contains(cons.CONTEXT_PRODUCT);
        cy.get(cons.$HEADER_DATA).contains(cons.CONTEXT_DATA_US); 
    })
    it('Validate and close overlay', () => {
        cy.contains(cons.US_OVERLAY_TEXT);
        cy.get(cons.X_US_OVERLAY).click();
    })
    it('Add to cart', () => {
        cy.get(cons.$ADD_TO_CART_INPUT).type(cons.CONTEXT_DATA_US) 
        cy.get(cons.$ADD_TO_CART_BUTTON).click()
        cy.get(cons.$CART_VALUE).contains(cons.CONTEXT_DATA_US)
    })
    it('Purchase event', () => {
        cy.get(cons.$PURCHASE_BUTTON).click()
    })
})

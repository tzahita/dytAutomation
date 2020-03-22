import * as cons from '../const.js';
describe('Events', function () {
    before(function () {
        cy.visit(cons.BASE_URL);
        cy.contains(cons.CONTEXT_HOMEPAGE);
    })
    it('Init US section', function () {
        cy.get(cons.$SECTION_ID).type(cons.US_SECTION_ID);
        cy.get(cons.$SECTION_BUTTON).click();
        cy.url().should('eq', cons.BASE_URL_US_PARAM)
    })
    it('Validate and close overlay', function () {
        cy.contains(cons.US_OVERLAY_TEXT);
        cy.get(cons.X_US_OVERLAY).click();
    })
    it('Purchase event', function () {
        cy.get(cons.$PURCHASE_INPUT).type(cons.CONTEXT_DATA_US)
        cy.get(cons.$PURCHASE_BUTTON).click()
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
        })
    })
    it('Add to cart event', function () {
        cy.get(cons.$ADD_TO_CART_INPUT).type(cons.CONTEXT_DATA_US)
        cy.get(cons.$ADD_TO_CART_BUTTON).click()
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
        })
    })
    it('Login by email', function () {
        cy.get(cons.$LOGIN_INPUT).type(cons.EMAIL)
        cy.get(cons.$LOGIN_BUTTON).click()
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
        })
    })
    it('Opt in by email', function () {
        cy.get(cons.$OPTIN_INPUT).type(cons.EMAIL)
        cy.get(cons.$OPTIN_BUTTON).click()
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
        })
    })
    it('Opt out by email', function () {
        cy.get(cons.$OPTOUT_INPUT).type(cons.EMAIL)
        cy.get(cons.$OPTOUT_BUTTON).click()
        cy.server().should((server) => {
            expect(server.status).to.eq(200)
        })
    })
})
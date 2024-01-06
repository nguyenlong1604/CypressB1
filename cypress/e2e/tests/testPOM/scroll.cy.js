describe('template spec', () => {
    it('TC1 - Scroll', () => {
        cy.visit('https://vinid.net/')
        cy.wait(2000)

        cy.scrollTo(0, 500);
        cy.wait(2000)

        cy.wait(2000)
        cy.scrollTo('bottom')

        cy.wait(2000)
        cy.scrollTo('top')

        cy.wait(2000)
        cy.xpath("//a[@href='https://vinid.net/tin-tuc']//span[@class='cta-title'][normalize-space()='Khám phá thêm']").scrollIntoView();
    })
})
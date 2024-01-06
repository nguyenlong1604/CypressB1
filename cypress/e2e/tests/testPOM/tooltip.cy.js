describe('tooltip', () => {
    it('TC1 - tooltip', () => {
        cy.visit('https://demoqa.com/tool-tips')

        cy.xpath("//button[@id='toolTipButton']").trigger('mouseover')
        cy.get('.tooltip').should('be.visible').contains("You hovered")
        cy.wait(1000)
    })
})
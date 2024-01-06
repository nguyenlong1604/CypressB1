describe("EX15", () => {
    it("TC1 - read file", () => {
        let data = "hihihiiiiiiiii"
        cy.writeFile("cypress/fixtures/dataLogin.txt", data)

        cy.readFile('cypress/fixtures/dataLogin.txt').then((content) => {
          expect(content).to.include('hihihiiiiiiiii')

        cy.fixture("dataLogin.txt").then((content) => {
            cy.log(content)
            console.log(content);
        cy.wrap(content).should('contain', 'hihihiiiiiiiii');
        })
        })
    })
    
})
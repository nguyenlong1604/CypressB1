describe('alert', () => {
    // it('TC1 - alert', () => {
    //     cy.visit('https://demoqa.com/alerts')

    //     cy.on("window:alert", (text) => {
    //         expect(text).to.equal("You clicked a button");
    //     })

    //     cy.xpath("//button[@id='alertButton']").click();
    // })

    // it('TC2 - confirm', () => {
    //     cy.visit('https://demoqa.com/alerts')
    //     cy.on("window:confirm", () => false);
    //     cy.xpath("//button[@id='confirmButton']").click();
    //     cy.on("window:alert", (text) => {
    //         expect(text).to.equal("Cancel");
    //     });
    //     cy.wait(10000)
    // })
    
    it('TC3 - prompt', () => {
        cy.visit('https://demoqa.com/alerts')

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns(" mot chiec long ");
        });

        cy.xpath("//button[@id='promtButton']").click()

        cy.on("window:alert", (text) => {
            expect(text).to.equal("Your input value");
        })
    })
})
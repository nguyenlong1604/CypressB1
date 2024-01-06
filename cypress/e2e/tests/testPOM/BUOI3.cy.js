describe("BUOI3", () => {
    /*
    it("TC1 - Testcheckbox ", () => {
        cy.visit("https://harlequin-birgit-30.tiiny.site/");
        cy.get("input[name= 'checkbox-name']").check()
        //cy.get("input[name= 'checkbox-name']").uncheck()
        cy.get("input[name= 'checkbox-name']").should("be.checked")
        //cy.get("input[name= 'checkbox-name']").should("not.be.checked")
    })

    it("TC2 -Testcheckbox", () => {
        cy.visit("https://demoqa.com/checkbox")
        cy.get("input[type='checkbox']").check({force: true})
    })
    
    it("TC3 - Testcheckbox", () => {
        cy.visit("https://demoqa.com/radio-button")
        cy.get("input[type= 'radio']").check({force: true});

     })
    it("TC4 - Testcheckbox", () => {
        cy.visit("https://harlequin-birgit-30.tiiny.site/")
        cy.get("input[value='female']").check();
        cy.get("input[value='female']").should("be.visible").and("have.value", "female");
    })
    */
   /*
   it("TC5 - Testcheckbox", () => {
        cy.visit("https://demoqa.com/buttons")
        //cy.get("#doubleClickBtn").click()
        //cy.contains("button", "Click Me").click()
        cy.xpath(`//button[text()='Click Me']`).click()
        cy.get("#dynamicClickMessage").should("be.visible").and("have.text", "You have done a dynamic click");
   })
*/
   it("TC6 - Link", () => {
        cy.visit("https://demoqa.com/links")
        cy.get("#simpleLink").invoke('removeAttr', 'target').click()
        
   })

})
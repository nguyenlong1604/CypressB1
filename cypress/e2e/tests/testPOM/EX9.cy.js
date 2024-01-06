describe("EX9", () => {
    
    it("TC1", () => {
        
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        //cy.get("input[name = 'username']").should("be.enabled").type("Admin");
        //cy.get("input[name = 'password']").should("be.enabled").type("*****");
        cy.get("button[ng-click='manager()']").should("be.enabled").click();
        cy.get(".center").should("be.visible")
        cy.get("button[ng-click='addCust()']").should("be.enabled").click();
        

        //cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //cy.get("input[name = 'username']").should( "have.value", "");
        //cy.get("input[name = 'password']").should( "have.value", "");
        //cy.get("p[class = 'oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible").and("have.text", "Invalid credentials");

    })
})
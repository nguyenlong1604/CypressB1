describe("BTVN1", () => {
    it("TC1 - register get element by css selector", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").type("Nguyen Duc Long");
        cy.get("#userEmail").type("nguyenlong1604zzz@gmail.com");
        cy.get("#currentAddress").type("Ha Noi city");
        cy.get("#permanentAddress").type("Hoa Binh city");
        cy.get("#submit").click();
    });
    
    it("TC2 - register get element by xpath", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.xpath("//input[@id='userName']").type("Nguyen Duc Long");
        cy.xpath("//input[@id='userEmail']").type("nguyenlong1604zzz@gmail.com");
        cy.xpath("//textarea[@id='currentAddress']").type("Ha Noi city");
        cy.xpath("//textarea[@id='permanentAddress']").type("Hoa Binh city");
        cy.xpath("//button[@id='submit']").click();
        
    });
});
describe("BTVN1", () => {
    it("TC1 - register get element by css selector", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").should("be.enabled").type("Nguyen Duc Long");
        cy.get("#userEmail").should("be.enabled").type("nguyenlong1604zzz@gmail.com");
        cy.get("#currentAddress").should("be.enabled").type("Ha Noi city");
        cy.get("#permanentAddress").should("be.enabled").type("Hoa Binh city");
        cy.get("#submit").should("be.enabled").click();

        cy.get("#userName").should(`have.value`, `Nguyen Duc Long`);
        cy.get("#name").should(`be.visible`).and(`have.text`,`Name:Nguyen Duc Long`)
        cy.get("#name").should(`be.visible`).and(`include.text`, `Nguyen`)



        /*
        cy.get('#userEmail')
            .invoke('val')
            .then(val => {
                console.log(`value email: `, val)
                    expect(val).equal(`nguyenlong1604zzz@gmail.com`);
        });
        */

    });
    
    /*
    it("TC2 - register get element by xpath", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.xpath("//input[@id='userName']").should("be.enabled").type("Nguyen Duc Long");
        cy.xpath("//input[@id='userEmail']").should("be.enabled").type("nguyenlong1604zzz@gmail.com");
        cy.xpath("//textarea[@id='currentAddress']").should("be.enabled").type("Ha Noi city");
        cy.xpath("//textarea[@id='permanentAddress']").should("be.enabled").type("Hoa Binh city");
        cy.xpath("//button[@id='submit']").should("be.enabled").click();
        
    });
    */
});
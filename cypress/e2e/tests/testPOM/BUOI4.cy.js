describe("BUOI4", () => {
    it("TC1", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        cy.xpath("//button[normalize-space()='Login']").click()
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
        cy.xpath("//input[@placeholder='First Name']").type("Nguyen")
        cy.xpath("//input[@placeholder='Middle Name']").type("Duc")
        cy.xpath("//input[@placeholder='Last Name']").type("Long")
        cy.xpath("//button[normalize-space()='Save']").click()        
        cy.url().should("contains", "viewPersonalDetails/empNumber")
        cy.xpath("//input[@placeholder='First Name']").should( "have.value", "Nguyen");
        cy.xpath("//input[@placeholder='Middle Name']").should( "have.value", "Duc");
        cy.xpath("//input[@placeholder='Last Name']").should( "have.value", "Long");
        cy.xpath("//button[normalize-space()='Save']").should("be.visible").click()
        
        
        cy.xpath("//input[@placeholder='Last Name']").type('{selectAll}LongAAAA{enter}');
        cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']").click()
    })

})
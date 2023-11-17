describe("BTVN2", () => {
    /*
    it("TC1 - login false - password", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").should("be.enabled").type("Admin");
        cy.get("input[name = 'password']").should("be.enabled").type("*****");
        cy.get("button[type = 'submit']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").should( "have.value", "");
        cy.get("input[name = 'password']").should( "have.value", "");
        cy.get("p[class = 'oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible").and("have.text", "Invalid credentials");

    })

    
    it("TC2 - login false - username", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").should("be.enabled").type("*****");
        cy.get("input[name = 'password']").should("be.enabled").type("admin123");
        cy.get("button[type = 'submit']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").should( "have.value", "");
        cy.get("input[name = 'password']").should( "have.value", "");
        cy.get("p[class = 'oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible").and("have.text", "Invalid credentials");

    })
    
    it("TC3 - login false - blank username", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'password']").should("be.enabled").type("admin123");
        cy.get("button[type = 'submit']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").should( "have.value", "");
        cy.get("input[name = 'password']").should( "have.value", "admin123");
        cy.get(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message").should("be.visible").and("have.text", "Required");
    })
    */
    it("TC4 - login false - blank password", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").should("be.enabled").type("Admin");
        cy.get("button[type = 'submit']").should("be.enabled").click();
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").should( "have.value", "Admin");
        cy.get("input[name = 'password']").should( "have.value", "");
        cy.get(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message").should("be.visible").and("have.text", "Required");
    })
    /*
    it("TC5 - Login pass orange", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").should("be.enabled").type("Admin")
        cy.xpath("//input[@placeholder='Password']").should("be.enabled").type("admin123")
        cy.xpath("//button[normalize-space()='Login']").should("be.enabled").click()
    })
    */
})
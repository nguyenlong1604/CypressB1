describe("login", () => {
    it("TC1 - Login success", () => {
        cy.visit("https://itlearn.edu.vn/wp-login.php");
        cy.get("#user_login").type("admin")
        cy.get("#user_pass").type("123")
        cy.get("#wp-submit").click()
    })
    

    it("TC2 - Login orange", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name = 'username']").type("Admin")
        cy.get("input[name = 'password']").type("admin123")
        cy.get("button[type = 'submit']").click()
    })
    
    it("TC3 - Login orange", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        cy.xpath("//button[normalize-space()='Login']").click()
    })
})
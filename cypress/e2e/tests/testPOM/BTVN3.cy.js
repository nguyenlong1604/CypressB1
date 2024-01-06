describe("BTVN3", () => {
    it("TC1 - SubmitForm", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.xpath("//input[@id='firstName']").should("be.enabled").type("Nguyen");
        cy.xpath("//input[@id='lastName']").should("be.enabled").type("Long")
        cy.get("#gender-radio-1").should("be.enabled").check({force: true}).and("have.value", "Male");
        cy.xpath("//input[@id='userNumber']").should("be.enabled").type("1234567891")

        cy.get("#dateOfBirth")
            .find("#dateOfBirthInput")
            .type('{selectAll}2022-11-02{enter}');

        cy.get("#uploadPicture").selectFile("D:/AutomationTest/BMI/BMI.jpg")

        cy.get("#react-select-3-input")
            .click({force: true})
            .type('Haryana{enter}')

        cy.get("#react-select-4-input")
            .click({force: true})
            .type('Panipat{enter}');

        cy.xpath("//button[@id='submit']").click({force: true})


    })


})
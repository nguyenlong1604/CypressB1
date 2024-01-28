import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {faker} from '@faker-js/faker';

When("Tôi truy cập vào MyInfo", function () {
    cy.xpath("//span[normalize-space()='My Info']").click();
});

Then("Màn hình hiển thị đầy đủ thông tin MyInfo", () => {
    cy.url().should("contain", "viewPersonalDetails");
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("be.visible")
        .and("contain", "PIM");
});

When("Nhập thông tin theo fakeer data mockup", () => {
    let firstName = faker.name.firstName();
    cy.get("input[name='firstName']").clear().type(firstName);

    let middleName = faker.name.middleName();
    cy.get("input[name='middleName']").clear().type(middleName);

    let lastName = faker.name.lastName();
    cy.get("input[name='lastName']").clear().type(lastName);

    let employeeId = faker.random.alphaNumeric(8);
    cy.xpath("//div[@class='orangehrm-edit-employee-content']//div[2]//div[1]//div[1]//div[1]//div[2]//input[1]").clear().type(employeeId);

    let randomId = faker.random.alphaNumeric(8);
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[1]/div[2]/div[1]/div[2]/input[1]").clear().type(randomId);

    let licenseNumber = faker.random.alphaNumeric(12);
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[1]/div[2]/div[1]/div[2]/input[1]").clear().type(licenseNumber);

    const expiryDate = faker.date.future(3); 
    const formattedExpiryDate = expiryDate.toISOString().split('T')[0]; 
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-3 orangehrm-full-width-grid']/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]").type(formattedExpiryDate);


});

When("Lưu thông tin thành công", () => {
    cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] button[type='submit']").click();
});

Then("Kiểm tra thông tin vừa cập nhật", () => {
    cy.url().should("contain", "viewPersonalDetails");
});

Then("Kiểm tra thông tin vừa cập fsdfdggggggggggggggfgdgdfgdfdfgfdgdgbv gvfbfnhật", () => {
    cy.url().should("contain", "viewPersonalDetails");
});

  

  
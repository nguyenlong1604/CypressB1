import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {faker} from '@faker-js/faker';


When("Tôi truy cập vào MyInfoo", function () {
    cy.xpath("//span[normalize-space()='My Info']").click();
});

Then("Màn hình hiển thị đầy đủ thông tin MyInfoo", () => {
    cy.url().should("contain", "viewPersonalDetails");
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("be.visible")
        .and("contain", "PIM");
});

When("Tôi nhấp chuột vào Contact Details", function () {
    cy.xpath("//a[normalize-space()='Contact Details']").click({force: true});
});

Then("Màn hình hiển thị đầy đủ thông tin Contact Details", () => {
    cy.url().should("contain", "contactDetails");
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("be.visible")
        .and("contain", "PIM");
});

When("Nhập thông tin theo fakeer data mockupp", () => {
    let streetAddress1 = faker.address.streetAddress();
    cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//div[1]//div[1]//div[1]//div[1]//div[2]//input[1]").clear().type(streetAddress1);

    let streetAddress2 = faker.address.streetAddress();
    cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//div[1]//div[1]//div[2]//div[1]//div[2]//input[1]").clear().type(streetAddress2);

    let cityName = faker.location.city();
    cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//div[1]//div[1]//div[3]//div[1]//div[2]//input[1]").clear().type(cityName);

    let stateProvinceName = faker.address.state();
    cy.xpath("//div[4]//div[1]//div[2]//input[1]").clear().type(stateProvinceName);

    let postalCode = faker.address.zipCode();
    cy.xpath("//div[5]//div[1]//div[2]//input[1]").clear().type(postalCode);

});

When("Lưu thông tin chi tiết liên lạc thành côngg", () => {
    cy.xpath("//button[normalize-space()='Save']").click();
});

Then("Kiểm tra thông tin vừa cập nhậtt", () => {
    cy.url().should("contain", "contactDetails");
    
});
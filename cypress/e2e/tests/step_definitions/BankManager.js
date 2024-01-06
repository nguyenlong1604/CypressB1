import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Truy cập vào màn hình trang chủ", function () {
    cy.visit(`https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login`)
});

When(`Tôi nhấp chuột vào button "Bank Manager Login"`, (buttonText) => {
    cy.get("button[ng-click='manager()']").click()
});

Then(`Hiển thị ra màn hình "Bank Manager Login"`, () => {
    cy.url().should("eq", "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager");

})

When(`Tôi nhấp chuột vào "Add Customer"`, (buttonText) => {
    cy.wait(5000);
    cy.get("button[ng-click='addCust()']").click()
})

Then(`Hiển thị ra màn hình "Add Customer"`, () => {
    cy.url().should("eq", "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust");
})

When(`Nhập đầy đủ thông tin vào Form`, (FirstName, LastName, PostCode) => {
    cy.get("input[ng-model='fName']").type("Nguyen")
    cy.get("input[ng-model='lName']").type("Long")
    cy.get("input[ng-model='postCd']").type("111000")
})

Then(`Thông tin được hiện đầy đủ trong Form`, () => {
    cy.get("input[ng-model='fName']").should("have.value", "Nguyen")
    cy.get("input[ng-model='lName']").should("have.value", "Long")
    cy.get("input[ng-model='postCd']").should("have.value", "111000")

})

When(`Tôi nhấp chuột vào button "Add Customer"`, (buttonText) => {
    cy.get("button[class='btn btn-default']").click()
})

Then(`Kiểm tra thêm mới khách hàng thành công`, () => {
    
})
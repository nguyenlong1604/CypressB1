import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Tôi đã mở trang đăng nhập", function () {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
});

//cach1
When(`Tôi nhấn nút "Login"`, (buttonText) => {
    cy.get("button[type='submit']").click()
})


Then(`Tôi nên nhìn thấy trang chào mừng`, () => {
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

})

//cach3
When("Tôi nhập thông tin nhập sai", function (dataTable) {
    dataTable.hashes().forEach(data => {
        if (data.username) {
            cy.get("input[name='username']").type(data.username)
        } 
        if (data.password) {
            cy.get("input[name='password']").type(data.password)
        }
    });
});

//cach4

When(`Tôi nhập {string} và {string}`, (username, password) => {
    if (username) 
    cy.get("input[name='username']").type(username)
    if (password) 
    cy.get("input[name='password']").type(password)
});


Given("Tôi truy cập vào website và login thành công với username = {string} và password = {string}", function (username, password) {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
    if (username) 
    cy.get("input[name='username']").type(username)
    if (password) 
    cy.get("input[name='password']").type(password)
    cy.get("button[type='submit']").click()
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})
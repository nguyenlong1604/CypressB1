// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  }) 

  Cypress.Commands.add('inputText', function (elmUI, text) {
    elmUI
      .should("be.visible")
      .clear()
      .type(text)
      .invoke("val")
      .then(function (val) {
        expect(val).to.eq(text);
      });
    
  })

  Cypress.Commands.add('inputNumber', function (elmUI, number) {
    elmUI
      .should("be.visible")
      .clear()
      .type(number)
  })

  Cypress.Commands.add('radio_button', function (elmUI) {
    elmUI
    .should("be.enabled")
    .check({force: true})
  })

  Cypress.Commands.add('checkbox', function (elmUI) {
    elmUI
    .should("be.enabled")
    .and("not.be.checked")
    .click({force: true})
  })

  Cypress.Commands.add("verifi", function(elmUI, text) {
    elmUI
    .should("be.enabled")
    .and("have.value", text)
       
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
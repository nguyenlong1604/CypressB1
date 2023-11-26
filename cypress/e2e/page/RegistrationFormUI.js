const FirstName = "input[placeholder='First Name']";
const LastName = "input[placeholder='Last Name']";
const EMAIL = "input[placeholder='name@example.com']";
const AGE = "input[placeholder='Age']";
const SALARY = "input[placeholder='Salary']";
const DEPARTMENT = "input[placeholder='Department']"
const Button = "button[type='submit']";
const MODAL_CONTENT = "div[class='modal-content']";

export default class Table {
    get getfirstName () {
        return cy.get(FirstName)
    }

    get getlastName () {
        return cy.get(LastName)
    }

    get getEmail () {
        return cy.get(EMAIL)
    }

    get getAge () {
        return cy.get(AGE)
    }

    get getSalary () {
        return cy.get(SALARY)
    }

    get getDepartment () {
        return cy.get(DEPARTMENT)
    }

    get getbutton () {
        return (
            cy.get(Button)
            .should("be.enabled")
        ) 
    }

    get getmodalcontent () {
        return (
            cy.get(MODAL_CONTENT)
            .should("be.visible")
        )
    }
}
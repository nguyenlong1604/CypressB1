import TableUI from "../page/TablesUI";
import RegistrationFormUI from "../page/RegistrationFormUI";
import RegistrationForm from "../../fixtures/RegistrationForm.json";

const tablesUI = new TableUI;
const registrationFormUI = new RegistrationFormUI

describe("BUOI6", () => {
    it("TC1", () => {
        cy.visit(tablesUI.getURL)
        
        let rowIndex = 1
        let cellIndex = 6

        cy.get(tablesUI.getTable)
            .find(tablesUI.getRow)
            .eq(rowIndex)
            .find(tablesUI.getCell)
            .eq(cellIndex)
            .find(tablesUI.getEdit)
            .click()

            tablesUI.getmodalcontent;

            cy.inputText(registrationFormUI.getfirstName, RegistrationForm.Registration_Form.first_Name);
            cy.inputText(registrationFormUI.getlastName, RegistrationForm.Registration_Form.last_Name);
            registrationFormUI.getbutton.click();

            cy.verifi(registrationFormUI.getfirstName, RegistrationForm.Registration_Form.first_Name);
            cy.verifi(registrationFormUI.getlastName, RegistrationForm.Registration_Form.last_Name);
        /*
        let rowIndex = 1
        let cellIndex = 1

        cy.get(tablesUI.getTable)
            .find(tablesUI.getRow)
            .eq(rowIndex)
            .find(tablesUI.getCell)
            .eq(cellIndex)
            .should('have.text', 'Cantrell')
        */
    })

})
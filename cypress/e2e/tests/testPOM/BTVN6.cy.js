import TableUI from "../../page/TablesUI";
import RegistrationFormUI from "../../page/RegistrationFormUI";
import RegistrationForm from "../../../fixtures/RegistrationForm.json";
import CheckboxUI from "../../page/CheckboxUI"

const tablesUI = new TableUI
const registrationFormUI = new RegistrationFormUI
const checkboxUI = new CheckboxUI


describe("BTVN6", () => {
    
    it("BT1-Tuong tac table", () => {
        cy.visit(tablesUI.getURL)
        tablesUI.getAdd.click()
        registrationFormUI.getmodalcontent
        cy.inputText(registrationFormUI.getfirstName, RegistrationForm.Registration_Form.first_Name);
        cy.inputText(registrationFormUI.getlastName, RegistrationForm.Registration_Form.last_Name);
        cy.inputText(registrationFormUI.getEmail, RegistrationForm.Registration_Form.emai);
        cy.inputNumber(registrationFormUI.getAge, RegistrationForm.Registration_Form.age);
        cy.inputNumber(registrationFormUI.getSalary, RegistrationForm.Registration_Form.salary);
        cy.inputText(registrationFormUI.getDepartment, RegistrationForm.Registration_Form.department);
        registrationFormUI.getbutton.click();

        cy.verifi(registrationFormUI.getfirstName, RegistrationForm.Registration_Form.first_Name);
        cy.verifi(registrationFormUI.getlastName, RegistrationForm.Registration_Form.last_Name);
        cy.verifi(registrationFormUI.getEmail, RegistrationForm.Registration_Form.emai);
        cy.verifi(registrationFormUI.getAge, RegistrationForm.Registration_Form.age);
        cy.verifi(registrationFormUI.getSalary, RegistrationForm.Registration_Form.salary);
        cy.verifi(registrationFormUI.getDepartment, RegistrationForm.Registration_Form.department);

        //Search
        tablesUI.getSearch.click()
        cy.inputText(tablesUI.getSearch, RegistrationForm.Search.first_Name);
        tablesUI.geticonSearch.click()
        cy.verifi(tablesUI.getSearch, RegistrationForm.Search.first_Name);
    })
    
   
    it("BT2 - Tuong tac voi danh sach", () => {
        cy.visit(checkboxUI.getURL);
        checkboxUI.getcheckList
        checkboxUI.getClickHome.click();
        checkboxUI.getClickDownload.click();
        cy.checkbox(checkboxUI.getClickCheckboxWordFile);
        checkboxUI.getMessage;
    })
    
})
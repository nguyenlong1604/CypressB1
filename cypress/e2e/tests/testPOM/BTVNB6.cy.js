import OrangeUI from "../../page/OrangeUI";
import Orange from "../../../fixtures/Orange.json";

const orangeUI = new OrangeUI()

describe("BTVNB6", () => {

    it("TC1", () => {
        //login
        cy.visit(orangeUI.getURL_LOGIN);
        cy.inputText(orangeUI.useNamelogin, Orange.data_login.user_name);
        cy.inputText(orangeUI.passWordlogin, Orange.data_login.pass_word);
        orangeUI.submitlogin.click({force: true});

        // add employe
        cy.visit(orangeUI.getURL_ADD);
        cy.wait(5000);
        cy.inputText(orangeUI.firstNameADD, Orange.data_add_emp.firstName_Add);
        cy.inputText(orangeUI.middleNameADD, Orange.data_add_emp.midName_Add);
        cy.inputText(orangeUI.lastNameADD, Orange.data_add_emp.lastName_Add);
        cy.inputNumber(orangeUI.employeeIdADD, Orange.data_add_emp.idEmp_Add);
        orangeUI.saveADD.click({force: true});

        //edit
        cy.url().should("contains", "viewPersonalDetails/empNumber")
        cy.inputText(orangeUI.firstNameEdit, Orange.data_edit_info_emp.firstName_Edit);
        cy.inputText(orangeUI.middleNameEdit, Orange.data_edit_info_emp.midName_Edit);
        cy.inputText(orangeUI.lastNameEdit, Orange.data_edit_info_emp.lastName_Edit);
        cy.inputNumber(orangeUI.employeeIdEdit, Orange.data_edit_info_emp.idEmp_Edit);
        orangeUI.saveEdit.click({force: true});
        cy.verifi(orangeUI.firstNameEdit, Orange.data_edit_info_emp.firstName_Edit);
        cy.verifi(orangeUI.middleNameEdit, Orange.data_edit_info_emp.midName_Edit);
        cy.verifi(orangeUI.lastNameEdit, Orange.data_edit_info_emp.lastName_Edit);

        //list employlist
        orangeUI.click_PIM.click({force: true});
        orangeUI.list_employ;

        //Search
        cy.inputText(orangeUI.getsearch_ID, Orange.search_id.idEmp_Edit);
        orangeUI.getBtnSearchClick.click({force: true});

    })
})

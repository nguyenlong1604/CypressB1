import PracticeFormUI from "../../page/PracticeFormUI";
import Formdemo from "../../../fixtures/Formdemo.json";

const practiceFormUI = new PracticeFormUI()

describe("BUOI5", () => {
    it("TC1 - LoginForm", () => {
        cy.visit(practiceFormUI.getUrl)
        cy.inputText(practiceFormUI.firstName, Formdemo.data_from.first_Name);
        cy.inputText(practiceFormUI.lastName, Formdemo.data_from.last_Name);
        cy.radio_button(practiceFormUI.genDerMale)
        cy.inputText(practiceFormUI.moBlie, Formdemo.data_from.mo_blie)
        practiceFormUI.subMit.click({force: true})
        


        //practiceFormUI.firstName.should("be.enabled").type(Formdemo.data_from.first_Name);
        //practiceFormUI.lastName.should("be.enabled").type(Formdemo.data_from.last_Name);
        //practiceFormUI.genDer.should("be.enabled").check({force: true}).and("have.value", "Male");
        //practiceFormUI.moBlie.should("be.enabled").type(Formdemo.data_from.mo_blie)
        //practiceFormUI.subMit.click({force: true})
    })


})
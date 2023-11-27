const URL = "https://demoqa.com/checkbox";
const CHECK_LIST = "//div[@id='tree-node']/ol";
const CLICK_HOME_LIST = "(//button[@title='Toggle'])[1]";
const CLICK_DOWNLOADS_LIST = "(//button[@title='Toggle'])[4]";
const CHECKBOX_WORLD_FILE = "#tree-node-wordFile";
const MESSAGE = ".text-success";

export default class CheckboxList {
    get getURL() {
        return URL
    }

    get getcheckList () {
        return (
           cy.xpath(CHECK_LIST)
           .should("be.visible")
        )
    }

    get getClickHome() {
        return cy.xpath(CLICK_HOME_LIST)
    }

    get getClickDownload() {
        return cy.xpath(CLICK_DOWNLOADS_LIST)
    }

    get getClickCheckboxWordFile() {
        return cy.get(CHECKBOX_WORLD_FILE)
    }

    get getMessage() {
        return (
            cy.get(MESSAGE)
            .should("be.visible")
            .and("have.text", "wordFile")
        )
    }
}
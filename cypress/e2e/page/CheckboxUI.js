const URL = "https://demoqa.com/checkbox";
const CLICK_HOME_LIST = "(//button[@title='Toggle'])[1]";
const CLICK_DOWNLOADS_LIST = "(//button[@title='Toggle'])[4]";
const CHECKBOX_WORLD_FILE = "#tree-node-wordFile";
const MESSAGE = ".text-success";

export default class CheckboxList {
    get getURL() {
        return URL
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
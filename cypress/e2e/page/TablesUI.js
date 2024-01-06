const URL = "https://demoqa.com/webtables";
const TABLE = "div[role='grid']";
const ROW = ".rt-tr-group";
const CELL = "div[class='rt-td']";
const EDIT = "span[title='Edit']";
const DELETE = "span[id='delete-record-4']";
const ADD = "#addNewRecordButton";
const SEARCH = "input[placeholder='Type to search']";
const ICONSEARCH = "span[class='input-group-text']";


export default class Table {
    get getURL () {
        return URL 
    }

    get getTable () {
        return cy.get(TABLE)
    }

    get getRow () {
        return cy.get(ROW)
    }

    get getRowSelector () {
        return ROW
    }

    get getCell () {
        return cy.get(CELL)
    }

    get getCellSelector () {
        return CELL
    }

    get getEdit () {
        return cy.get(EDIT)
    }

    get getDelete () {
        return DELETE
    }

    get getAdd () {
        return (
            cy.get(ADD)
            .should("be.enabled")
        )
    }

    get getSearch () {
        return cy.get(SEARCH)
    }

    get geticonSearch () {
        return cy.get(ICONSEARCH)
    }
}
//login
const URL_LOGIN = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
const USE_NAME = "//input[@placeholder='Username']";
const PASS_WORD = "//input[@placeholder='Password']";
const SUBMIT = "//button[normalize-space()='Login']";

//add employe
const URL_ADD = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee";
const FIRST_NAME = "//input[@placeholder='First Name']";
const MIDDLE_NAME = "//input[@placeholder='Middle Name']";
const LAST_NAME = "//input[@placeholder='Last Name']";
const ID_EMPLOY = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
const SAVE = "//button[normalize-space()='Save']";

//edit employe
const FIRST_NAME_EDIT = "//input[@placeholder='First Name']";
const MIDDLE_NAME_EDIT = "//input[@placeholder='Middle Name']";
const LAST_NAME_EDIT = "//input[@placeholder='Last Name']";
const ID_EMPLOY_EDIT = "//div[@class='orangehrm-edit-employee-content']//div[2]//div[1]//div[1]//div[1]//div[2]//input[1]";
const SAVE_EDIT = "//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']"

// list employelist
const CLICK_PIM = "a[class='oxd-main-menu-item active']";
const EMPLOY_LIST = "div[role='table']";

//search
const SEARCH_ID = "(//input[@class='oxd-input oxd-input--active'])[2]";
const BTN_SEARCH = "button[type='submit']"


export default class Orange {
    get getURL_LOGIN() {
        return URL_LOGIN
    }

    get useNamelogin() {
        return cy.xpath(USE_NAME)
    }

    get passWordlogin() {
        return cy.xpath(PASS_WORD)
    }

    get submitlogin() {
        return cy.xpath(SUBMIT)
    }

    //add employee

    get getURL_ADD() {
        return URL_ADD
    }

    get firstNameADD() {
        return cy.xpath(FIRST_NAME)
    }

    get middleNameADD() {
        return cy.xpath(MIDDLE_NAME)
    }

    get lastNameADD() {
        return cy.xpath(LAST_NAME)
    }

    get employeeIdADD() {
        return cy.xpath(ID_EMPLOY)
    }

    get saveADD() {
        return cy.xpath(SAVE)
    }

    //edit employe

    get firstNameEdit() {
        return cy.xpath(FIRST_NAME_EDIT)
    }

    get middleNameEdit() {
        return cy.xpath(MIDDLE_NAME_EDIT)
    }

    get lastNameEdit() {
        return cy.xpath(LAST_NAME_EDIT)
    }

    get employeeIdEdit() {
        return cy.xpath(ID_EMPLOY_EDIT)
    }

    get saveEdit() {
        return cy.xpath(SAVE_EDIT)
    }

    //Click employe

    get click_PIM () {
        return (
            cy.get(CLICK_PIM)
            .should("be.visible")
        )
    }

    get list_employ () {
        return (
            cy.get(EMPLOY_LIST)
        )
    }

    //Search

    get getsearch_ID () {
        return cy.xpath(SEARCH_ID)
    }

    get getBtnSearchClick() {
        return (
            cy.get(BTN_SEARCH).should("be.enabled")
        )
    }
}
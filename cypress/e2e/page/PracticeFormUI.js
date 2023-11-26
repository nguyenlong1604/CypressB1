const URL = "https://demoqa.com/automation-practice-form"
const FIRS_TNAME = "//input[@id='firstName']" 
const LAST_NAME = "//input[@id='lastName']"
const GENDER_MALE = "#gender-radio-1"
const MOBILE = "//input[@id='userNumber']"
const SUBMIT = "//button[@id='submit']"


export default class LoginForm {
    get getUrl() {
        return URL
    }

    get firstName () {
        return cy.xpath(FIRS_TNAME)
    }

    get lastName () {
        return cy.xpath(LAST_NAME)
    }

    get genDerMale () {
        return cy.get(GENDER_MALE)
    }

    get moBlie () {
        return cy.xpath(MOBILE)
    }

    get subMit () {
        return cy.xpath(SUBMIT)
    }
}



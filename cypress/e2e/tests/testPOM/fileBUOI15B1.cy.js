describe('login', () => {

    it("TC1 - Dowload file", () => {
        cy.visit("https://the-internet.herokuapp.com/download")

        let elmDownload = cy.xpath("//a[normalize-space()='LambdaTest.txt']")
        let fileNamePath = "cypress/fixtures/LambdaTest.txt/"
        elmDownload
            .invoke('attr', 'href')
            .then((downloadLink) => {
                cy.request({
                    url: downloadLink,
                    encoding: 'binary',
                }).then((response) => {
                    cy.writeFile(fileNamePath, response.body, 'binary')
                })
            })
    })

    it("TC2 - UPload file", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.xpath("//input[@id='file-upload']").selectFile("C:/Users/ACER/OneDrive/Pictures/pexels-photo-9142622.jpeg")
        cy.xpath("//input[@id='file-submit']").click()

    })
})
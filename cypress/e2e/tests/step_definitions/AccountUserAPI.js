
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("Tôii đã tạo tài khoản với username là {string} và password là {string}", (username, password) => {

    cy.request({
        method: "POST",
        url: 'https://demoqa.com/Account/v1/User',
        header: {
            'Content-Type': "application/json"
        },
        body: {
            "userName": username,
            "password": password
        }
    }).then(response => {
        expect(response.status).to.eq(201);
        cy.wrap(response.body).should('deep.include', {
            username: username,
    });

        ////////////////////////////////////////
        let userID = response.body.userID
        let token = ""
        cy.request({
                method: "POST",
                url: 'https://demoqa.com/Account/v1/GenerateToken',
                header: {
                    'Content-Type': "application/json"
                },
                body: {
                    "userName": username,
                    "password": password
                }
            }).then(responseToken => {
                    token = responseToken.body.token

                    cy.log("userID", userID)
                    cy.log("token", token)

                    
                    ////////////////////////////////////////////
                    /*
                    cy.request({
                        method: "DELETE",
                        url: 'https://demoqa.com/Account/v1/User/' + userID,
                        headers: {
                            'Authorization': "Bearer " + token,
                            'Content-Type': "application/json"
                        },
                        body: {
                        }
                    }).then(response => {
                        expect(response.status).to.eq(204);
                        //cy.wrap(response.body).should('deep.include', {
                        //    username: username,
                    });
                    */

                    //////////////////////////////////////////////////////////
                    /*list books*/
                    cy.request({
                        method: "GET",
                        url: 'https://demoqa.com/BookStore/v1/Books',
                        headers: {
                        },
                        body: {
                        }
                    }).then(response => {
                        expect(response.status).to.eq(200);
                    });

                    //////////////////////////////////////////////////////////
                    /*create books*/
                    
                    let isbn = 9781449325862;
                    cy.log("isbn", isbn)
                    cy.request({
                        method: "POST",
                        url: 'https://demoqa.com/BookStore/v1/Books',
                        headers: {
                            'Authorization': "Bearer " + token,
                            'Content-Type': "application/json"
                        },
                        body: {
                            "userId": userID,
                            "collectionOfIsbns": [
                        {
                            "isbn": isbn
                        }
                    ]
                    }
                    }).then(response => {
                        // Kiểm tra xem request đã thành công hay không
                        expect(response.status).to.eq(201);

                        // Kiểm tra nội dung của response
                        cy.log(JSON.stringify(response.body));

                        // Kiểm tra rằng response chứa thông tin sách mong muốn
                        expect(response.body.books).to.have.lengthOf(1);
                        expect(response.body.books[0].isbn).to.eq(isbn);
                    });

                    

                    //////////////////////////////////////////////////////////
                    /*get 1 book*/
                    cy.request({
                        method: "GET",
                        url: 'https://demoqa.com/BookStore/v1/Book?ISBN=9781449331818',
                        headers: {
                        },
                        body: {
                        }
                    }).then(response => {
                        expect(response.status).to.eq(200);
                    });

                    //////////////////////////////////////////////////////////
                    /*delete 1 book*/
                    cy.request({
                        method: "DELETE",
                        url: 'https://demoqa.com/BookStore/v1/Book',
                        timeout: 60000,
                        headers: {
                            'Authorization': "Bearer " + token,
                            'Content-Type': "application/json"
                        },
                        body: {
                            "isbn": isbn,
                            "userId": userID
                        }
                    }).then(response => {
                        expect(response.status).to.equal(204);
                        expect(response.body).to.have.property('success', true);
                    });
                    
            })
        })
    })


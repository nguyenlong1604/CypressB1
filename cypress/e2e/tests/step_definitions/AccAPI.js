import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Tôi đã tạo tài khoản với username là {string} và password là {string}", (username, password) => {

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
        let data = {
            "username": username,
            "password": password,
            "userID": response.body.userID
        }
        cy.writeFile("cypress/fixtures/dataLogin1.json", data)
    });
});

Then("Tôi tạo một mã Token", () => {
    let token = ""
    cy.readFile("cypress/fixtures/dataLogin1.json").then(DataLogin => {
        cy.request({
            method: "POST",
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            header: {
                'Content-Type': "application/json"
            },
            body: {
                "userName": DataLogin.username,
                "password": DataLogin.password
            }
        }).then(responseToken => {
            expect(responseToken.status).to.eq(200);
            token = responseToken.body.token
            cy.log("token", token)
            DataLogin.token = token
            cy.writeFile("cypress/fixtures/dataLogin1.json", DataLogin)
        });
    })

});

When("Tôi đăng nhập bằng cookies", () => {
     cy.readFile("cypress/fixtures/dataLogin1.json").then(DataLogin => {
         cy.clearAllCookies()
         cy.clearAllLocalStorage()
         cy.clearAllSessionStorage()
     
         cy.setCookie('userName', DataLogin.username, {domain: "demoqa.com"})
         cy.setCookie('userID', DataLogin.userID, {domain: "demoqa.com"})
         cy.setCookie('expires', "2024-01-03T12%3A50%3A10.307Z", {domain: "demoqa.com"})
         cy.setCookie('token', DataLogin.token, {domain: "demoqa.com"})


         cy.visit('https://demoqa.com/profile')
         
         cy.getCookie('userName').then((cookie) => {
            const cookieValue = cookie.value
         });
    })
});

When("Set gia tri cho localstorage", () => {
    
        // cy.setCookie('userName', DataLogin.username, {domain: "demoqa.com"})
        // cy.setCookie('userID', DataLogin.userID, {domain: "demoqa.com"})
        // cy.setCookie('expires', "2024-01-03T12%3A50%3A10.307Z", {domain: "demoqa.com"})
        // cy.setCookie('token', DataLogin.token, {domain: "demoqa.com"})

        window.localStorage.setItem('hiiiii', 'hiiiiii',{domain: "demoqa.com"})

        // cy.visit('https://demoqa.com/profile')
        
        // cy.getCookie('userName').then((cookie) => {
        //    const cookieValue = cookie.value
        // });
        let a = window.localStorage.getItem('hiiiii')
        if (a) {
            cy.log('pass')
        }

});

// Then("Tôi kiểm tra mã Token vừa tạo", () => {
//     cy.readFile("cypress/fixtures/dataLogin1.json").then(DataLogin => {
//         cy.request({
//             method: "POST",
//             url: 'https://demoqa.com/Account/v1/Authorized',
//             headers: { // Sửa từ 'header' thành 'headers'
//                 'Content-Type': "application/json"
//             },
//             body: {
//                 "userName": DataLogin.username,
//                 "password": DataLogin.password
//             }
//         }).then(responseToken => {
//             expect(responseToken.status).to.eq(200);
//             let token = responseToken.body.token; // Lưu token vào biến
//             expect(token).to.eq("true"); // Kiểm tra token có phải là "true" không
//         });
//     })
// });

/* book store */
// When("Tôi lấy tất cả các Books", () => {
//     let token = ""
//     cy.readFile("cypress/fixtures/dataLogin1.json").then(DataLogin => {
//         cy.request({
//             method: "GET",
//             url: 'https://demoqa.com/BookStore/v1/Books',
//             header: {
//             },
//             body: {
//             }
//         }).then(responseToken => {
//             expect(responseToken.status).to.eq(200);
//         });
//     })

// });

/* Tôi Post Books */
// When("Tôi Post Books", () => {
//     cy.readFile("cypress/fixtures/dataLogin1.json").then(DataLogin => {
//         let isbn = 9781449325862;
//         cy.request({
//             method: "POST",
//             url: 'https://demoqa.com/BookStore/v1/Books',
//             header: {
//                 'Authorization': "Bearer " + DataLogin.token,
//                 'Content-Type': "application/json"
//             },
//             body: {
//                 "userId": DataLogin.userID,
//                 "collectionOfIsbns": [
//                     {
//                         "isbn": isbn
//                     }
//                 ]
//             }
//         }).then(responseToken => {
//             expect(responseToken.status).to.eq(201);
//             cy.log(JSON.stringify(response.body));
//             expect(response.body.books).to.have.lengthOf(1);
//             expect(response.body.books[0].isbn).to.eq(isbn);
//             cy.writeFile("cypress/fixtures/dataLogin1.json", DataLogin)
//         });
//     })

// });
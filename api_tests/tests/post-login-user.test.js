const { spec, request  } = require('pactum');
const baseUrl = "https://practice.expandtesting.com/notes/api/users/login";

describe('Login user test suite', () => {
    before( async () => {
        request.setDefaultTimeout(10000);
    });
    it('Login user with valid credentials', async () => {
       
        const requestBody = {
                "email": "elena@admin.com",
                "password": "admin123"
        };

        await spec().post(baseUrl)
        .withBody(requestBody)
        .withHeaders('Content-Type' , 'application/json')
        .expectStatus(200)
    });
});

const { spec, request } = require('pactum'); 

describe('POST Create notes test suit', () => {
   // let authToken = '';

    before(async () => {
        request.setDefaultTimeout(10000);

        const requestBody = {
            "email": "elena@admin.com",
            "password": "admin123"
    };
    await spec().post('https://practice.expandtesting.com/notes/api/users/login')
    .withBody(requestBody)
    .withHeaders('Content-Type' , 'application/json')
    .expectStatus(200);
   // authToken = response.body.token;

    });    

    it('POST Create notes test', async () => {
        //console.log(authToken);
     
        const requestBody = {
            title: "title",
            description: "description",
            category:"Home"

        };
        
     await spec().post('https://practice.expandtesting.com/notes/api/notes')
    .withHeaders('X-auth-token', 'eafae0b2730d4f3fa4dda9d08676e8dd0e68b7c2f9774e4b8bb97ee7a2881f29')
    .withBody(requestBody)
    .expectStatus(200);
    });
});

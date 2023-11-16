
const { spec, request } = require('pactum');
const baseUrl = "https://practice.expandtesting.com/notes/api/notes/";

describe('DELETE Note test suit', () => {
    before( async () => {
        request.setDefaultTimeout(10000)

        const requestBody = {
            "email": "elena@admin.com",
            "password": "admin123"
    };

    await spec().post('https://practice.expandtesting.com/notes/api/users/login')
    .withBody(requestBody)
    .withHeaders('Content-Type' , 'application/json')
    .expectStatus(200);      
    });    

    it('DELETE Note test', async () => {
        const noteId = "64298e2b6747aa02118d3c23";

        await spec()
        .withHeaders('X-auth-token', 'eafae0b2730d4f3fa4dda9d08676e8dd0e68b7c2f9774e4b8bb97ee7a2881f29')
        .delete(baseUrl+noteId) 
        .expectStatus(200);

    });
});
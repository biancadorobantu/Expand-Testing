
const { spec, request } = require('pactum');
const baseUrl = "https://practice.expandtesting.com/notes/api/users/register"; 

describe('POST Register user test suite', () => {
    before(() => {
        request.setDefaultTimeout(10000)
    });    

    it('POST register user valid', async () => {

        const requestBody = {
            name: "Bianca",
            email: "elena@admin.com",
            password:"admin123"
        };

        await spec()
        .post(baseUrl)
        .withHeaders('Content-Type', 'application/json')
        .withBody(requestBody)
        .expectStatus(201);

    });

    it('POST register user invalid', async () => {

        const requestBody = {
            email: "elena@admin.com",
            password:"admin123"
        };

        await spec()
        .post(baseUrl)
        .withHeaders('Content-Type', 'application/json')
        .withBody (requestBody)
        .expectStatus(400)
        .expectJsonLike({ message: 'User name must be between 4 and 30 characters'});

    });
});
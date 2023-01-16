const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 12345,
            "username": "parhan",
            "firstname": "parhan",
            "lastname": "hambali",
            "email": "parhan123@gmail.com",
            "password": "parhan123",
            "phone": "089123",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})
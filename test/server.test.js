const request = require('supertest');
const app = require('../index.js');

describe('GET /', () => {
    it('should return Hello From Server!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello From Server!');
    });
}
);

describe('POST /api', () => {
    it('should return data received successfully', async () => {
        const response = await request(app).post('/api').send({
            name: 'John Doe',
            email: 'abhishekverman3459@gmail.com',
            message: 'Hello, this is a test message!'
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Data received successfully');
    })
}
);
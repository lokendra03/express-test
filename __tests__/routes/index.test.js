
const request = require('supertest');
const app = require("../../app.js");

describe('GET /api/v1/forms/test', () => {
  it('should return a JSON response with message "pong"', async () => {
    const res = await request(app).get('/api/v1/forms/test');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'pong' });
  });
});
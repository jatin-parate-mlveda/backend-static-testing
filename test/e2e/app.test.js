import request from 'supertest';
import { app } from '../../src/app';

describe('[GET] /', () => {
  test('returns valid json', async () => {
    const res = await request(app)
      .get('/')
      .send()
      .expect({ message: 'Hello, world!' });
    expect(res.statusCode).toEqual(200);
  });
});

describe('[GET] /random', () => {
  test('returns not found error', async () => {
    const res = await request(app)
      .get('/random')
      .send()
      .expect({ code: 404, message: 'Page not found!' });
    expect(res.statusCode).toEqual(404);
  });
});

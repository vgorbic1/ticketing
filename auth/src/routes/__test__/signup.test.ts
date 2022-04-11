import request from 'supertest'
import { app } from '../../app'

it('returns a 201 on successful signup', async () => {
  return request(app) // technically can be "await" instead "return"
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)
})

it('returns a 400 with invalid email',  async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'xxxxxxxx',
      password: 'password'
    })
    .expect(400)
})

it('returns a 400 with invalid password',  async () => {
  return request(app) 
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'p'
    })
    .expect(400)
})

it('returns a 400 with missing email or password',  async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com' })
    .expect(400)

  return request(app)
    .post('/api/users/signup')
    .send({ password: '12345' })
    .expect(400)
})

it('disallows duplicate emai', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ 
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)

  await request(app)
    .post('/api/users/signup')
    .send({ 
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400)
})

it('sets cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({ 
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)
    
  expect(response.get('Set-Cookie')).toBeDefined()
})
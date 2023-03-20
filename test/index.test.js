import app from '../app.js'
import chai from 'chai'
import request from 'supertest'

const assert = chai.assert
const expect = chai.expect


describe('Probando a mangas', () =>  {
  it('GET a /mangas debe verificar que se pasa token por headers', async () => { 
    const res = await request(app)
    .get('/mangas')
    .set('Authorization', 'Bearer mytoken')

    expect(res.status).to.equal(200);
    console.log(res.body)
    expect(res.body.token).to.equal('mytoken')
  })  
})
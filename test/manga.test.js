import app from '../app.js'
import chai from 'chai'
import request from 'supertest'
import mongoose from 'mongoose';
const { expect, assert } = chai;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThjMzZkNThlN2E0NWIyMzAwNjA5ZCIsImlhdCI6MTY3OTQyOTI2NiwiZXhwIjoxNjgwMDM0MDY2fQ.b4PLzn545IynaWckMowO9Vo-dgat_AQZmbCY_AQ8CSw"
<<<<<<< HEAD
//const mangaId = '6418b8f9b447d534f335807d'
describe("testing t-02", async () => {

    it('GET /mangas/:id verificar que el id enviado por params es un objectid', async () => {
        const mangaId = '6418b8f9b447d534f335807d'; // Asignar un valor válido
=======
describe("testing t-02", async () => {

    it('GET /mangas/:id verificar que el id enviado por params es un objectid', async () => {
        const mangaId = '6418b8f9b447d534f335807d'; 
>>>>>>> af0580ae9ac8b0f1f14421b2f6123465170f9d43
        const isValidObjectId = mongoose.Types.ObjectId.isValid(mangaId);
        expect(isValidObjectId).to.be.true;
        const response = await request(app).get(`/mangas/${mangaId}`)
            .set('Authorization', `Bearer ${token}`)
    })
    
<<<<<<< HEAD
    it("GET /mangas/:id verificar que se pasa token por headers", async () => {//funciona ok
=======
    it("GET /mangas/:id verificar que se pasa token por headers", async () => {
>>>>>>> af0580ae9ac8b0f1f14421b2f6123465170f9d43
        const response = await request(app)
            .get("/mangas/6418b8f9b447d534f335807d")
            .auth(token, { type: "bearer" });
        expect(response.request.header.Authorization).to.equal(
            `Bearer ${token}`
        );
    })
<<<<<<< HEAD
    it('GET /mangas/:id verificar que la respuesta tiene alguna propiedad con el objeto (manga)	', async () => {//funciona ok
=======
    it('GET /mangas/:id verificar que la respuesta tiene alguna propiedad con el objeto (manga)	', async () => {
>>>>>>> af0580ae9ac8b0f1f14421b2f6123465170f9d43
        const response = await request(app).get(`/mangas/6418b8f9b447d534f335807d`).auth(token, { type: 'bearer' })
        expect(response.body).to.have.property('manga')
    })
})


















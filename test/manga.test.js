import app from '../app.js'
import chai from 'chai'
import request from 'supertest'
import mongoose from 'mongoose';
const { expect, assert } = chai;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThjMzZkNThlN2E0NWIyMzAwNjA5ZCIsImlhdCI6MTY3OTQyOTI2NiwiZXhwIjoxNjgwMDM0MDY2fQ.b4PLzn545IynaWckMowO9Vo-dgat_AQZmbCY_AQ8CSw"
describe("testing t-02", async () => {

    it('GET /mangas/:id verificar que el id enviado por params es un objectid', async () => {
        const mangaId = '6418b8f9b447d534f335807d'; 
        const isValidObjectId = mongoose.Types.ObjectId.isValid(mangaId);
        expect(isValidObjectId).to.be.true;
        const response = await request(app).get(`/mangas/${mangaId}`)
            .set('Authorization', `Bearer ${token}`)
    })
    
    it("GET /mangas/:id verificar que se pasa token por headers", async () => {
        const response = await request(app)
            .get("/mangas/6418b8f9b447d534f335807d")
            .auth(token, { type: "bearer" });
        expect(response.request.header.Authorization).to.equal(
            `Bearer ${token}`
        );
    })
    it('GET /mangas/:id verificar que la respuesta tiene alguna propiedad con el objeto (manga)	', async () => {
        const response = await request(app).get(`/mangas/6418b8f9b447d534f335807d`).auth(token, { type: 'bearer' })
        expect(response.body).to.have.property('manga')
    })
})


















import app from "../../app.js";
import chai from "chai";
import request from 'supertest'
const { expect, assert } = chai;



const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThiOGY0YjQ0N2Q1MzRmMzM1ODA2MCIsImlhdCI6MTY3OTk2MTAxMCwiZXhwIjoxNjgwNTY1ODEwfQ.skWfjVh9U48GaLAc_woxz0AjAFYc02_2KKh9sWya8lA";
//cambiar el token cuando expire
describe('POST /chapters', async () => {
    // it("POST /chapters verificar que pages es un array de strings", async () => {
    //     const date = new Date();

    //     const chapters = {
    //         manga_id: "6418b8f9b447d534f335807d",
    //         title: `chapter${date}`,
    //         pages: ["https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg"],
    //     };
    //     const response = await request(app)
    //         .post("/chapters")
    //         .send(chapters)
    //         .auth(token, { type: "bearer" });
    //     console.log(response.body.chapters)
    //     assert.equal(response.status, 201);
    //     expect(chapters.pages).to.be.a('array')
    //     chapters.pages.forEach(page => assert.isString(page)
    //     )
    // })
    // it('GET api/chapters/:id verificar que la respuesta tiene alguna propiedad un array de url (pages)', async () => {
    //     const response = await request(app)
    //         .get('/chapters/6418b8f9b447d534f335807f')
    //         .set('Accept', "application/json")
    //         .auth(token, { type: "bearer" });
    //     expect(response.body.chapter).to.have.property("pages"); // Verificar que la respuesta tenga una propiedad "pages"
    //     expect(response.body.chapter.pages).to.be.an("array"); // Verificar que la propiedad "pages" sea un array
    //     expect(response.body.chapter.pages).to.satisfy((pages) => {
    //         // Verificar que cada elemento del array sea una URL
    //         return pages.every((page) => {
    //             return typeof page === "string" && /^https?:\/\//.test(page);
    //         });
    //     });
    // })
    it("POST api/chapters verificar que la respuesta devuelve alguna propiedad con el capitulo que ha sido creado", async () => {
        const date = new Date();

        const chapters = {
            manga_id: "6418b8f9b447d534f335807d",
            title: `titulo lucas`,
            pages:
                "https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg",

        };
        const response = await request(app)
            .post("/chapters")
            .send(chapters)
            .auth(token, { type: "bearer" });
        console.log(response)
        assert.equal(response.status, 201);
        assert.equal(response.body.title, chapters.title);

    });
    // it("verifica que se pase el token por headers", async () => {
    //     const response = await request(app)
    //         .get("/chapters/")
    //         .auth(token, { type: "bearer" });

    //     expect(response.request.header.Authorization).to.equal(
    //         `Bearer ${token}`
    //     );
    // });


})
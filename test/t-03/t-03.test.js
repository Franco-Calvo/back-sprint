import app from "../../app.js";
import chai from "chai";
import request from 'supertest'
<<<<<<< HEAD
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

=======

const assert = chai.assert
const expect = chai.expect

describe('Test to chapters', () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThiOWVjNjQ0MDM0MDA0ZTA1M2FkYSIsImlhdCI6MTY3OTQyNjc0NCwiZXhwIjoxNjgwMDMxNTQ0fQ.A3CLZE-iLGjeG11P4eWEahP55GhdKetsBicPmTRkSTY'

    it('POST api/chapters verificar que pages es un array de strings', async () => {
        const chapter = {
            manga_id: '6418b8f9b447d534f335807d',
            title: 'Welcome - part 1',
            cover_photo: 'https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg',
            pages: ['https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg', 'https://i.postimg.cc/c41MRkxX/alice-in-borderland-001-02.jpg', 'https://i.postimg.cc/wvhcVSRb/alice-in-borderland-001-03.jpg', 'https://i.postimg.cc/Zn4PDVrY/alice-in-borderland-001-04.jpg', 'https://i.postimg.cc/SNZLDLjq/alice-in-borderland-001-05.jpg', 'https://i.postimg.cc/SNZLDLjq/alice-in-borderland-001-05.jpg', 'https://i.postimg.cc/GmHFNBsD/alice-in-borderland-001-06.jpg', 'https://i.postimg.cc/nVGGQfJX/alice-in-borderland-001-07.jpg', 'https://i.postimg.cc/QCmgL1bQ/alice-in-borderland-001-08.jpg', 'https://i.postimg.cc/JzvNW1b2/alice-in-borderland-001-09.jpg', 'https://i.postimg.cc/8k4LzdRW/alice-in-borderland-001-10.jpg', 'https://i.postimg.cc/SNKC2XdP/alice-in-borderland-001-11.jpg', 'https://i.postimg.cc/BnrKVm3W/alice-in-borderland-001-12.jpg', 'https://i.postimg.cc/g03ZF3cx/alice-in-borderland-001-13.jpg', 'https://i.postimg.cc/zB5RJ330/alice-in-borderland-001-14.jpg', 'https://i.postimg.cc/4y2Kb5PS/alice-in-borderland-001-15.jpg', 'https://i.postimg.cc/fyRt9Fcd/alice-in-borderland-001-16.jpg', 'https://i.postimg.cc/QtbKVsTs/alice-in-borderland-001-17.jpg', 'https://i.postimg.cc/kMTtmJCv/alice-in-borderland-001-18.jpg', 'https://i.postimg.cc/TYh52zYM/alice-in-borderland-001-19.jpg', 'https://i.postimg.cc/9FSRDLr4/alice-in-borderland-001-20.jpg', 'https://i.postimg.cc/4x9KVp9W/alice-in-borderland-001-21.jpg', 'https://i.postimg.cc/1z18H40s/alice-in-borderland-001-22.jpg', 'https://i.postimg.cc/CLZdpbmw/alice-in-borderland-001-23.jpg', 'https://i.postimg.cc/mr3t6RVM/alice-in-borderland-001-24.jpg', 'https://i.postimg.cc/nzHMy5wW/alice-in-borderland-001-25.jpg', 'https://i.postimg.cc/c4VCx6bw/alice-in-borderland-001-26.jpg', 'https://i.postimg.cc/cHX60mpL/alice-in-borderland-001-27.jpg', 'https://i.postimg.cc/qqqqRKrX/alice-in-borderland-001-28.jpg', 'https://i.postimg.cc/fWqkP87H/alice-in-borderland-001-29.jpg', 'https://i.postimg.cc/6qP3GQ5s/alice-in-borderland-001-30.jpg', 'https://i.postimg.cc/dVr1LvbX/alice-in-borderland-001-31.jpg'],
            order: 1
        }

        expect(chapter.pages).to.be.a('array')
        chapter.pages.forEach(page => assert.isString(page))

        const response = await request(app)
            .post('/chapters/')
            .send(chapter)
            .auth(token, { type: 'bearer' })

        assert.equal(response.status, 201)
    })

    it('GET api/chapters verificar que se pasa token por headers ', async () => {

        const response = await request(app)
            .get('/chapters/')
            .auth(token, { type: 'bearer' })

        expect(response.request.header.Authorization).to.equal(`Bearer ${token}`)
    })
>>>>>>> 1dbc3f8ff57cee4801412c2894ee573f6fad9158

})
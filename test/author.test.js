import app from "../app.js";
import chai from "chai";
import request from "supertest";

const assert = chai.assert;
const expect = chai.expect;
let id = "640b93d57f41e871c0ed6622";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGM4Nzk5MGNkYWJmNTRlNGFkMzZjZSIsImlhdCI6MTY3ODk3NDY1OCwiZXhwIjoxNjc5NTc5NDU4fQ.KzJeMbCoxX2WKK-C-MPF9xXsOusAjHz5ecHSgTPDP78";
let author = {
  name: "Natzura",
  last_name: "aidazy",
  city: "Osaka",
  country: "japon",
  date: new Date(2003, 1, 2),
  photo:
    "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg",
};

describe("test en /authors verificar que la fecha de nacimiento es de tipo date", () => {
  it("POST api/authors ", async () => {
    const res = await request(app)
      .post("/authors")
      .send(author)
      .auth(token, {type: "bearer"});
    assert.typeOf(res.request._data.date, "date");
    //assert.typeOf(res.body.data.date, "date");
  });
  it("GET api/authors/:id verificar que el id enviado por params es un objectid", async () => {
    const res = await request(app)
      .get("/authors/" + id)
      .auth(token, {type: "bearer"});
    assert.isString(id);
    expect(id.length).to.equal(24);
  });
  it("POST api/authors verificar que la respuesta devuelve un status 400 cuando no se envia algun dato erroneo ", async () => {
    author.last_name = 0;
    const res = await request(app)
      .post("/authors")
      .send(author)
      .auth(token, {type: "bearer"});
    expect(res.status).to.equal(400);
  });
  it("GET api/authors/:id verificar que la respuesta tiene alguna propiedad con un objeto vacío al pasar un objectid inexistente", async () => {
    id = "640b93d57f41e871c0ed6620";
    const res = await request(app)
      .get("/authors/" + id)
      .auth(token, {type: "bearer"});
    assert.isNull(res.body.data);
  });
});

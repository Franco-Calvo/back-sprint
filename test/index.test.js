import app from "../app.js";
import chai from "chai";
import request from "supertest";

const assert = chai.assert;
const expect = chai.expect;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThiOGY0YjQ0N2Q1MzRmMzM1ODA1ZCIsImlhdCI6MTY3OTM2NTQ4NCwiZXhwIjoxNjc5OTcwMjg0fQ.t9-vTBZCVZOD8jy3u_bLb3vrrKCjZxlLzO4dw4H9xHs";

describe("Probando a mangas", () => {
  it("GET a /mangas debe verificar que se pasa token por headers", async () => {
    const res = await request(app)
      .get("/mangas")
      .set("Authorization", `Bearear ${token}`);

    expect(res.status).to.equal(200);
    expect(res.request.header).to.have.property(
      "Authorization",
      `Bearear ${token}`
    );
  });
});

describe("Prueba para verificar que cover_photo es una URL", () => {
  it("POST Debería retornar un objeto con una URL válida en cover_photo", async () => {
    const data = {
      author_id: "6041b9f32090180a205d24a0",
      title: "Mi manga favorito",
      cover_photo: "https://example.com/image.jpg",
      description: "Esta es la descripción de mi manga favorito",
      category_id: "6041b9f32090180a205d24a1",
    };
    const res = await request(app)
      .post("/mangas")
      .set("Authorization", `Bearear ${token}`)
      .send(data);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body.cover_photo).to.match(/^http(s)?:\/\/.+$/);
    console.log(res.body);
  });
});

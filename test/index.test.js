import app from "../app.js";
import chai from "chai";
import request from "supertest";

const assert = chai.assert;
const expect = chai.expect;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThiOGY0YjQ0N2Q1MzRmMzM1ODA1ZCIsImlhdCI6MTY3OTQxNTAwOCwiZXhwIjoxNjgwMDE5ODA4fQ.PWeCts8SM0IkxcyMK8s6SjkADea8Y1MemNIwgxZm-dw";

const data = {
  title: "sissdssb",
  cover_photo: "https://i.postimg.cc/PqQHYqrL/main-alice-in-borderland.jpg",
  description: "erous new world and find their way back to their true world?",
  category_id: "6418b8edb447d534f3358056",
};

describe("Probando a mangas", () => {
  it("GET a /mangas debe verificar que se pasa token por headers", async () => {
    const res = await request(app)
      .get("/mangas")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.request.header).to.have.property(
      "Authorization",
      `Bearer ${token}`
    );
  });
});

describe("Prueba para verificar que cover_photo es una URL", () => {
  it("POST Debería retornar un objeto con una URL válida en cover_photo", async () => {


    const res = await request(app)
      .post("/mangas")
      .set("Authorization", `Bearer ${token}`)
      .send(data);

    expect(res.status).to.equal(201);
    expect(res.body).to.be.an("object");
    expect(res.body.manga.cover_photo).to.match(/^(http(s):\/\/.)/);
  });
});

describe("POST mangas", () => {
  it('POST /mangas verificar que la respuesta devuelve "no autorizado" cuando no se pasa token', async () => {
    await request(app).post(`/mangas`).send(data).expect(401);
  });
});

describe("GET mangas", () => {
  it("GET mangas verificar que la respuesta tiene alguna propiedad con el array de objetos (mangas)", async () => {
    const response = await request(app)
      .get(`/mangas/view`)
      .auth(token, { type: "bearer" });
    expect(response.body).to.have.property("mangas");
  });
});

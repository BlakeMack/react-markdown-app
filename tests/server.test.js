

const {expect} = require('chai');
const request = require('supertest');
const app = require("../server")

describe("Get all files endpoint", () => {
  it("responds with json", () => {
    request(app)
    .get('/api/getAll')
    .expect('Content-Type', /application\/json/)
    .expect(200)
  })
  it("responds with an array of objects", () => {
    request(app)
    .get('/api/getAll')
    .expect(200)
    .then((res) => {
      expect(res.body).to.be.a("array");
      console.log(res.body)
      for (let i = 0; i < res.body.length; i++) {
        expect(res.body[i].name.to.be.a("string"))
        expect(res.body[i].text.to.be.a("string"))
      }
    })
  })
})

describe('should correctly update a file by its name', () => {
  it("should select and update the relevant file from the name given", () => {
    request(app)
    .patch("/api/update/rest-api-notes")
    .send({
      name: "rest-api-notes",
      text: "HELLO from test.js"
    })
    .expect(201)
    .then((res) => {
      console.log(res.body)
      expect(res.body.name).to.be.eql('rest-api-notes')
      expect(res.body.text).to.be.eql('hello from test.js')
    })
  })
})

describe('POST Create a file', () => {
  it('should create a file', () => {
      request(app)
      .post('/api/post')
      .send({
        name: "test.js post test",
        text: "# hello from test.js"
      })
      .expect(200)
      .then((res) => {
       expect(res.headers.location).to.be.eql('api/post');
       expect(res.body).to.be.an("object")
  });
});
});

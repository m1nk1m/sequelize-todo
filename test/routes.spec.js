const chai = require('chai'),
  expect = chai.expect,
  chaiHttp = require('chai-http'),
  app = require('../app'),
  models = require('../models');

chai.use(chaiHttp)

describe('API Routes', () => {
  beforeEach(done => {
    models.sequelize.sync()
      .then(() => {
        done();
      });
  })

  describe('GET /todos', (done) => {
    it('should get a list of todos', (done) => {
      chai.request(app)
        .get('/todos')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res).to.be.json
          expect(res.body).to.be.a('object')
          expect(res.body.payload).to.be.a('array');
          done()
        })
    })
  })

  describe('POST /todos', done => {
    it('should get a todos', done => {
      chai
        .request(app)
        .post('/todos')
        .send({
          body: 'test body'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body.payload).to.be.a('object');
          expect(res.body.payload.body).to.equal('test body');
          expect(res.body.payload.complete).to.equal(0);
          done();
        });
    });
  });

  describe('DELETE /todos/:id', done => {
    it('should get the id', done => {
      chai
        .request(app)
        .delete('/todos/:id')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body.payload).to.be.a("object");
          done();
        });
    });
  });
});
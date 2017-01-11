import {expect} from 'chai';
import request from 'supertest';
import app from '../../src/index';
import bookshelf from '../../src/db';

describe('Users Controller Test', () => {
  beforeEach((done) => {
    bookshelf.knex('users').del()
      .then(() => done());
  });

  it('should return list of users', (done) => {
    request(app)
      .get('/api/users')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(0);

        done();
      });
  });

  it('should create a new user with valid data', (done) => {
    let user = {
      name: 'Jane Doe'
    };

    request(app)
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(201);
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('name');
        expect(res.body.data).to.have.property('created_at');
        expect(res.body.data).to.have.property('updated_at');

        done();
      });
  });

  it('should not create a new user if name is not provided', (done) => {
    let user = {
      noname: 'Jane Doe'
    };

    request(app)
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(400);
        expect(res.body.error.code).to.be.equal(400);
        expect(res.body.error.message).to.be.equal('Bad Request');
        expect(res.body.error.details).to.be.an('array');
        expect(res.body.error.details[0]).to.have.property('message');
        expect(res.body.error.details[0]).to.have.property('param', 'name');

        done();
      });
  });
});

import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';
import bookshelf from '../../src/db';

/**
 * Tests for '/api/users'
 */
describe('Users Controller Test', () => {
  before(done => {
    bookshelf
      .knex('users')
      .truncate()
      .then(() => done());
  });

  it('should return list of users', done => {
    request(app)
      .get('/api/users')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(0);

        done();
      });
  });

  it('should not create a new user if name is not provided', done => {
    const user = {
      noname: 'Jane Doe'
    };

    request(app)
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        const { code, message, details } = res.body.error;

        expect(res.status).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Bad Request');
        expect(details).to.be.an('array');
        expect(details[0]).to.have.property('message');
        expect(details[0]).to.have.property('param', 'name');

        done();
      });
  });

  it('should create a new user with valid data', done => {
    const user = {
      name: 'Jane Doe'
    };

    request(app)
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        const { data } = res.body;

        expect(res.status).to.be.equal(201);
        expect(data).to.be.an('object');
        expect(data).to.have.property('id');
        expect(data).to.have.property('name');
        expect(data).to.have.property('created_at');
        expect(data).to.have.property('updated_at');
        expect(data.name).to.be.equal(user.name);

        done();
      });
  });

  it('should get information of user', done => {
    request(app)
      .get('/api/users/1')
      .end((err, res) => {
        const { data } = res.body;

        expect(res.status).to.be.equal(200);
        expect(data).to.be.an('object');
        expect(data).to.have.property('id');
        expect(data).to.have.property('name');
        expect(data).to.have.property('created_at');
        expect(data).to.have.property('updated_at');

        done();
      });
  });

  it('should respond with not found error if random user id is provided', done => {
    request(app)
      .get('/api/users/1991')
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(404);
        expect(code).to.be.equal(404);
        expect(message).to.be.equal('User not found');

        done();
      });
  });

  it('should update a user if name is provided', done => {
    const user = {
      name: 'John Doe'
    };

    request(app)
      .put('/api/users/1')
      .send(user)
      .end((err, res) => {
        const { data } = res.body;

        expect(res.status).to.be.equal(200);
        expect(data).to.be.an('object');
        expect(data).to.have.property('id');
        expect(data).to.have.property('name');
        expect(data).to.have.property('updated_at');
        expect(data.name).to.be.equal(user.name);

        done();
      });
  });

  it('should not update a user if name is not provided', done => {
    const user = {
      noname: 'John Doe'
    };

    request(app)
      .put('/api/users/1')
      .send(user)
      .end((err, res) => {
        const { code, message, details } = res.body.error;

        expect(res.status).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Bad Request');
        expect(details).to.be.an('array');
        expect(details[0]).to.have.property('message');
        expect(details[0]).to.have.property('param', 'name');

        done();
      });
  });

  it('should delete a user if valid id is provided', done => {
    request(app)
      .delete('/api/users/1')
      .end((err, res) => {
        expect(res.status).to.be.equal(204);

        done();
      });
  });

  it('should respond with not found error if random user id is provided for deletion', done => {
    request(app)
      .delete('/api/users/1991')
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(404);
        expect(code).to.be.equal(404);
        expect(message).to.be.equal('User not found');

        done();
      });
  });

  it('should respond with bad request for empty JSON in request body', done => {
    const user = {};

    request(app)
      .post('/api/users')
      .send(user)
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Empty JSON');

        done();
      });
  });
});

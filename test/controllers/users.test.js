import {expect} from 'chai';
import request from 'supertest';
import app from '../../src/index';
import bookshelf from '../../src/db';

/**
 * Tests for '/api/users'
 */
describe('Users Controller Test', () => {

  before(done => {
    bookshelf.knex('users').truncate().then(() => done());
  });

  it('should return list of users', done => {
    request(app)
      .get('/api/users')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(0);

        done();
      });
  });

  it('should not create a new user if name is not provided', done => {
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

  it('should create a new user with valid data', done => {
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
        expect(res.body.data).to.have.property('createdAt');
        expect(res.body.data).to.have.property('updatedAt');
        expect(res.body.data.name).to.be.equal(user.name);

        done();
      });
  });

  it('should get information of user', done => {
    request(app)
      .get('/api/users/1')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('name');
        expect(res.body.data).to.have.property('createdAt');
        expect(res.body.data).to.have.property('updatedAt');

        done();
      });
  });

  it('should respond with not found error if random user id is provided', done => {
    request(app)
      .get('/api/users/1991')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(404);
        expect(res.body.error.code).to.be.equal(404);
        expect(res.body.error.message).to.be.equal('User not found');

        done();
      });
  });

  it('should update a user if name is provided', done => {
    let user = {
      name: 'John Doe'
    };

    request(app)
      .put('/api/users/1')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('name');
        expect(res.body.data).to.have.property('createdAt');
        expect(res.body.data).to.have.property('updatedAt');
        expect(res.body.data.name).to.be.equal(user.name);

        done();
      });
  });

  it('should not update a user if name is not provided', done => {
    let user = {
      noname: 'John Doe'
    };

    request(app)
      .put('/api/users/1')
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

  it('should delete a user if valid id is provided', done => {
    request(app)
      .delete('/api/users/1')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(204);

        done();
      });
  });

  it('should respond with not found error if random user id is provided for deletion', done => {
    request(app)
      .delete('/api/users/1991')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(404);
        expect(res.body.error.code).to.be.equal(404);
        expect(res.body.error.message).to.be.equal('User not found');

        done();
      });
  });
});

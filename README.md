![Express API ES6 Starter](https://i.imgur.com/qeAbxtQ.png "Express API ES6 Starter")

[![Code Climate](https://codeclimate.com/github/mesaugat/express-api-es6-starter/badges/gpa.svg)](https://codeclimate.com/github/mesaugat/express-api-es6-starter)
[![Build Status](https://travis-ci.org/mesaugat/express-api-es6-starter.svg?branch=master)](https://travis-ci.org/mesaugat/express-api-es6-starter)
[![Codecov](https://codecov.io/gh/mesaugat/express-api-es6-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/mesaugat/express-api-es6-starter)

Starter application for building APIs with [Express.js](http://expressjs.com/)

Comes with:

* [ES6](http://babeljs.io/learn-es2015/) features/modules
* ES7 [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Bookshelf](http://bookshelfjs.org/) ORM and [Knex](http://knexjs.org/) migrations
* PostgreSQL (default) with support for MySQL and SQLite
* API documentation using [swagger-ui](https://www.npmjs.com/package/swagger-ui) and [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
* [ESLint](http://eslint.org/) for code linting
* Request validation using [Joi](https://www.npmjs.com/package/joi)
* Code formatting using [Prettier](https://www.npmjs.com/package/prettier)
* Logging using [winston](https://www.npmjs.com/package/winston)
* Application configuration using [dotenv](https://www.npmjs.com/package/dotenv)
* Tests using [mocha](https://www.npmjs.com/package/mocha), [supertest](https://www.npmjs.com/package/supertest) and [chai](https://www.npmjs.com/package/chai)

---

## Prerequisite

* [Node.js](https://yarnpkg.com/en/docs/install) - 6.9.0 or above
* [Yarn](https://yarnpkg.com/en/docs/install) - 1.0.0 or above
* [NPM](https://docs.npmjs.com/getting-started/installing-node) - 3.10.8 or above

## Setup

Clone the repository, install the dependencies and get started right away.

    $ git clone git@github.com:mesaugat/express-api-es6-starter.git <application-name>
    $ cd <application-name>
    $ rm -rf .git
    $ yarn   # or npm install

Make a copy of `.env.example` as `.env` and update your application details and database credentials. Now, run the migrations and seed the database.

    $ yarn migrate
    $ yarn seed

Finally, start the application.

    $ yarn start:dev (For development)
    $ yarn start (For production)

Navigate to http://localhost:8848/api-docs/ to verify installation.

## Setup Using Docker

Use [docker-compose](https://docs.docker.com/compose/) to quickly bring up a stack with pre-configured Postgres database container. Data is ephemeral and containers will disappear when stack is removed.

Specific configuration for Docker is in `.env.docker`
- `0.0.0.0` as `$APP_HOST` to expose app on Docker network interface
- Pre-configured Postgres settings - can be updated to point to another Postgres host

Bring up stack,

    $ docker-compose up

Navigate to http://localhost:8848/api-docs/ to verify application is running from docker.

Bring down stack,

    $ docker-compose down

## Using MySQL instead of PostgreSQL

Install the [mysql](https://www.npmjs.com/package/mysql) driver first. Update these lines `DB_CLIENT='pg'` and `DB_PORT='5432'` in your .env file to `DB_CLIENT='mysql'` and `DB_PORT='3306'` respectively.

You can remove the [pg](https://www.npmjs.com/package/pg) driver if you like to.

    $ yarn add mysql
    $ yarn remove pg

That's it, you are ready to roll.

## Tests

To run the tests you need to create a separate test database. Don't forget to update your `.env` file to include the name of the test database and run the migrations.

    $ NODE_ENV=test yarn migrate:latest
    $ yarn test

## Contributing

For contribution and feature requests, please create an [issue](https://github.com/mesaugat/express-api-es6-starter/issues) first.

## License

express-api-es6-starter is under [MIT License](LICENSE.md).

<h1 align="center">
  <img alt="Express API ES6 Starter" src="https://i.imgur.com/qeAbxtQ.png">
</h1>

> Starter application for building APIs with Express.js

[![Build Status](https://travis-ci.org/mesaugat/express-api-es6-starter.svg?branch=master)](https://travis-ci.org/mesaugat/express-api-es6-starter)
[![Codecov](https://codecov.io/gh/mesaugat/express-api-es6-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/mesaugat/express-api-es6-starter)

### [DEMO](https://express-api-es6-starter.herokuapp.com/api-docs/)

Comes with:

- [ES6](http://babeljs.io/learn-es2015/) features/modules
- ES7 [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Bookshelf](http://bookshelfjs.org/) ORM and [Knex](http://knexjs.org/) migrations
- PostgreSQL (default) with support for MySQL and SQLite
- API documentation using [swagger-ui-dist](https://www.npmjs.com/package/swagger-ui) and [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
- [ESLint](http://eslint.org/) for code linting
- Request validation using [Joi](https://www.npmjs.com/package/joi)
- Code formatting using [Prettier](https://www.npmjs.com/package/prettier)
- Configuration management using [dotenv](https://www.npmjs.com/package/dotenv)
- Logging using [winston](https://www.npmjs.com/package/winston)
- Error reporting using [Sentry](http://npmjs.com/package/@sentry/node)
- Tests using [mocha](https://www.npmjs.com/package/mocha), [supertest](https://www.npmjs.com/package/supertest) and [chai](https://www.npmjs.com/package/chai)

---

## Prerequisites

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [PostgreSQL](https://www.postgresql.org/download/) / [MySQL](https://www.mysql.com/downloads/) / [SQLite](https://www.sqlite.org/download.html)

## Setup

Clone the repository, install the dependencies and get started right away.

    $ git clone --depth=1 git@github.com:mesaugat/express-api-es6-starter.git <application-name>
    $ cd <application-name>
    $ rm -rf .git
    $ yarn   # or npm install

Make a copy of `.env.example` as `.env` and update your application details and database credentials. Now, run the migrations and seed the database.

    $ yarn migrate
    $ yarn seed

Finally, start the application.

    $ yarn start:dev (For development)
    $ NODE_ENV=production yarn start (For production)

Navigate to http://localhost:8848/api-docs/ to verify installation.

## Creating new Migrations and Seeds

These are the commands to create a new migration and corresponding seed file.

    $ yarn make:migration <name>
    $ yarn make:seeder <name>

Example,

    $ yarn make:migration create_tags_table
    $ yarn make:seeder 02_insert_tags

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

Install the [mysql](https://www.npmjs.com/package/mysql) driver first.

    $ yarn add mysql

Update these lines in your `.env` file.

```diff
- DB_CLIENT='pg'
+ DB_CLIENT='mysql'

- DB_PORT='5432'
+ DB_PORT='3306'
```

You can remove the [pg](https://www.npmjs.com/package/pg) driver if you like to.

    $ yarn remove pg

That's it, you are ready to roll.

## Tests

To run the tests you need to create a separate test database. Don't forget to update your `.env` file to include the connections for test database.

    $ NODE_ENV=test yarn migrate
    $ yarn test

Run tests with coverage.

    $ yarn test:coverage

## Why 8848?

Because the highest point in the world is [8848 metres](https://en.wikipedia.org/wiki/Mount_Everest).

## Contributing

For contribution and feature requests, please create an [issue](https://github.com/mesaugat/express-api-es6-starter/issues) first.

## License

express-api-es6-starter is under [MIT License](LICENSE).

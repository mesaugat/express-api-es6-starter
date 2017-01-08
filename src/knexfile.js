require('babel-register');
require('dotenv').config({path: __dirname + '/../.env'});

/**
 * Database configuration.
 */
module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset: 'utf8'
  },
  migrations: {
    tableName: 'migrations'
  }
};

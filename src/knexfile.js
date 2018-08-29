import 'babel-register';
require('dotenv').config({ path: __dirname + '/../.env' });

/**
 * Database configuration.
 */
export const client = process.env.DB_CLIENT;
export const connection = {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? process.env.TEST_DB_NAME : process.env.DB_NAME,
  charset: 'utf8',
  timezone: 'UTC'
};
export const migrations = {
  tableName: 'migrations',
  directory: './migrations',
  stub: './stubs/migration.stub'
};
export const seeds = {
  directory: './seeds',
  stub: './stubs/seed.stub'
};

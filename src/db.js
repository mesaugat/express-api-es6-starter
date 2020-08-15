import knexJs from 'knex';
import bookshelf from 'bookshelf';

import knexConfig from './knexfile';

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);
const db = bookshelf(knex);

export default db;

import knexJs from 'knex';
import bookshelfJs from 'bookshelf';

import knexConfig from './knexfile';

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);
const bookshelf = bookshelfJs(knex);

bookshelf.plugin(['virtuals', 'pagination', 'visibility']);

export default bookshelf;

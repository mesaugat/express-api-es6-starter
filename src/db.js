import knexJs from 'knex';
import knexConfig from './knexfile';
import bookshelfJs from 'bookshelf';

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);
const bookshelf = bookshelfJs(knex);

bookshelf.plugin('virtuals');
bookshelf.plugin('pagination');
bookshelf.plugin('visibility');

export default bookshelf;

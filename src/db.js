import knexJs from 'knex';
import bookshelfJs from 'bookshelf';


/**
 * Database connection and configuration.
 */
const knex = knexJs({
  client: process.env.DB_CLIENT,
  connection: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset: 'utf8'
  }
});

const bookshelf = bookshelfJs(knex);

bookshelf.plugin('virtuals');
bookshelf.plugin('pagination');
bookshelf.plugin('visibility');

export default bookshelf;

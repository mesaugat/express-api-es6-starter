import bookshelf from '../db';

const TABLE_NAME = 'users';

let User = bookshelf.Model.extend({
  tableName: TABLE_NAME,
  hasTimestamps: true
});

export default User;

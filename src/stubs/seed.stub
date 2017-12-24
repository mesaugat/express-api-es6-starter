/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('table_name')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('table_name').insert([
          {
            colName: 'rowValue',
            colName2: 'rowValue'
          },
          {
            colName: 'rowValue',
            colName2: 'rowValue'
          }
        ])
      ]);
    });
}

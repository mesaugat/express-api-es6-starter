/**
 * Delete all existing entries and seed users table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Saugat Acharya',
          updated_at: new Date()
        },
        {
          name: 'John Doe',
          updated_at: new Date()
        }
      ]);
    });
}

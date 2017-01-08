/**
 * Seed users table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('users').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({name: 'Saugat Acharya', updated_at: new Date()}),
        knex('users').insert({name: 'John Doe', updated_at: new Date()})
      ]);
    });
}

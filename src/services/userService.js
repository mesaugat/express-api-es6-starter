import Boom from 'boom';
import User from '../models/user';

/**
 * Get all users.
 *
 * @return {Promise}
 */
export async function getAllUsers() {
  return await User.fetchAll();
}

/**
 * Get a user.
 *
 * @param  {number|string}  id
 * @return {Promise}
 */
export async function getUser(id) {
  return await new User({id}).fetch()
    .then(user => {
      if (!user) {
        throw new Boom.notFound('User not found');
      }

      return user;
    });
}

/**
 * Create new user.
 *
 * @param  {object}  user
 * @return {Promise}
 */
export async function createUser(user) {
  return await new User({name: user.name}).save().then(user => user.refresh());
}

/**
 * Update a user.
 *
 * @param  {number|string}  id
 * @param  {object}         user
 * @return {Promise}
 */
export async function updateUser(id, user) {
  return await new User({id}).save({name: user.name}).then(user => user.refresh());
}

/**
 * Delete a user.
 *
 * @param  {number|string}  id
 * @return {Promise}
 */
export async function deleteUser(id) {
  return await new User({id}).fetch().then(user => user.destroy());
}

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
 * Create new user.
 *
 * @param  {object}  user
 * @return {Promise}
 */
export async function createUser(user) {
  return await new User({name: user.name}).save();
}

/**
 * Update a user.
 *
 * @param  {number|string}  id
 * @param  {object}         user
 * @return {Promise}
 */
export async function updateUser(id, user) {
  return await new User({id}).save({name: user.name});
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

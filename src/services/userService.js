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

import User from '../models/user';

/**
 * Get all users.
 * @return {Promise}
 */
export async function getAllUsers() {
  let users = await User.fetchAll();

  return users;
}

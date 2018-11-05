import HttpStatus from 'http-status-codes';
import * as userService from '../services/userService';

/**
 * Get all users
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchAll(req, res, next) {
  try {
    const data = await userService.getAllUsers();
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

/**
 * Get a user by its id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchById(req, res, next) {
  try {
    const data = await userService.getUser(req.params.id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new user
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function create(req, res, next) {
  try {
    const data = await userService.createUser(req.body);
    res.status(HttpStatus.CREATED).json({ data });
  } catch (error) {
    next(error);
  }
}

/**
 * Update a user
 * @param {Object} req
 * @param {Object} res
 * @param {next} next
 */
export async function update(req, res, next) {
  try {
    const data = await userService.updateUser(req.params.id, req.body);
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

/**
 * Delete a user
 * @param {Object} req
 * @param {Object} res
 * @param {next} next
 */
export async function deleteUser(req, res, next) {
  try {
    const data = await userService.deleteUser(req.params.id);
    res.status(HttpStatus.NO_CONTENT).json({ data });
  } catch (error) {
    next(error);
  }
}

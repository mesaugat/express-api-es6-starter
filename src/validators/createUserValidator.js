import Joi from 'joi';
import validate from '../utils/validate';

const SCHEMA = {
  name: Joi.string().label('Name').max(90).required()
};

/**
 * Validator for validating create user request.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
function createUserValidator(req, res, next) {
  // Skip validation for GET requests
  if (req.method === 'GET') {
    return next();
  }

  validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

export default createUserValidator;

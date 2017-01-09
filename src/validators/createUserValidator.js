import Joi from 'joi';
import validate from '../utils/validate';

const SCHEMA = {
  name: Joi.string().label('Name').max(90).required()
};

/**
 * Validator for validating create user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function createUserValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

export default createUserValidator;

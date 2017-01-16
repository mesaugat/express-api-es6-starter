import Joi from 'joi';
import Boom from 'boom';
import User from '../models/user';
import validate from '../utils/validate';

const SCHEMA = {
  name: Joi.string().label('Name').max(90).required()
};

/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {function}
 */
function userValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

/**
 * Validate users existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {function}
 */
function findUser(req, res, next) {
  User.forge({id: req.params.id})
    .fetch()
    .then(user => {
      if (!user) {
        let err = Boom.notFound('User not found');

        return next(err);
      }

      return next();
    })
    .catch(err => next(err));
}

export {findUser, userValidator};

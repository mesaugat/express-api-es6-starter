import logger from '../utils/logger';
import HttpStatus from 'http-status-codes';
import buildError from '../utils/buildError';

/**
 * Error response middleware for 404 not found. This middleware function should be at the very bottom of the stack.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function notFoundError(req, res) {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
}

/**
 * To handle errors from body parser for cases such as invalid JSON
 * sent through the body.
 *
 * https://github.com/expressjs/body-parser#errors
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function bodyParser(err, req, res, next) {  // eslint-disable-line no-unused-vars
  logger.error(err);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: HttpStatus.getStatusText(err.status)
    }
  });
}

/**
 * Generic error response middleware for validation and internal server errors.
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function genericErrorHandler(err, req, res, next) {  // eslint-disable-line no-unused-vars
  logger.error(err);

  let error = buildError(err);
  res.status(error.code).json({ error });
}

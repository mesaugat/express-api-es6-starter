import logger from '../utils/logger';
import HttpStatus from 'http-status-codes';

/**
 * Error response middleware for 404 not found. This middleware function should be at the very bottom of the stack.
 *
 * @param {Object} req
 * @param {Object} res
 */
export function notFoundError(req, res, next) { // eslint-disable-line no-unused-vars
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
}

/**
 * Generic error response middleware for validation and internal server errors.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
export function genericErrorHandler(err, req, res, next) {  // eslint-disable-line no-unused-vars
  if (err.stack) logger.error(err.stack);

  let code = err.code || HttpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || HttpStatus.getStatusText(code);

  res.status(code).json({
    error: {
      code: code,
      message: message
    }
  });
}

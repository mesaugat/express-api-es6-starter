import HttpStatus from 'http-status-codes';

/**
 * Build error response for validation errors.
 *
 * @param  {error} err
 * @return {array|object}
 */
function buildError(err) {
  // Validation errors
  if (err.isJoi || err instanceof SyntaxError) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
      details: err.details && err.details.map(err => {
        return {
          message: err.message,
          param: err.path
        };
      })
    };
  }

  // HTTP errors
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error
    };
  }

  // Return INTERNAL_SERVER_ERROR for all other cases
  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
  };
}

export default buildError;

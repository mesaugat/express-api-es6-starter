import HttpStatus from 'http-status-codes';

/**
 * Build error response for validation errors.
 *
 * @param  {Error} err
 * @return {Array|Object}
 */
function buildError(err) {
  if (err.isJoi) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
      details: err.details.map(err => {
        return {
          message: err.message,
          param: err.path
        };
      })
    };
  }


  // Return INTERNAL_SERVER_ERROR for all other cases
  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
  };
}

export default buildError;

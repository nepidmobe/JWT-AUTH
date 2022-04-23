const CustomAPIError = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  //generic error handler
  return res.status(500).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware

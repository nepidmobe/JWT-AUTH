const CustomAPIError = require("../errors/custom-error");

const UnAuthorizedError = require("../errors/unauthenticated");
const BadRequest = require("../errors/bad-request");

module.exports = { CustomAPIError, UnAuthorizedError, BadRequest };

const Joi = require('joi');

var loginAuthor = Joi.object().keys({
    username: Joi.string().regex(/^[^;]{2,30}$/).required().error(new Error('First name must be between 2 and 30 characters')),
    password: Joi.string().regex(/^.{8,100}$/).required().error(new Error('Password has to have at least 8 characters, one upper case letter and at least one number'))
});

module.exports = loginAuthor;

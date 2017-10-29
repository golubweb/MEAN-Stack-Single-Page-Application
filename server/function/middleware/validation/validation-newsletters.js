const Joi = require('joi');
const messages = require('./validator-messages');

var validationNewsletters = Joi.object().keys({
    email: Joi.string().regex(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/).required().error(
        new Error(JSON.stringify({ field: 'email', msg: messages.newsletters }))
    )
});

module.exports = validationNewsletters;

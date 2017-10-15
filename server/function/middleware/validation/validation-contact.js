const Joi = require('joi');
const messages = require('./validator-messages');

var validationContent = Joi.object().keys({
    title: Joi.string().regex(/^[^;]{3,30}$/).required().error(
        new Error(JSON.stringify({ field: 'title', msg: messages.title }))
    ),
    email: Joi.string().regex(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/).required().error(
        new Error(JSON.stringify({ field: 'email', msg: messages.email }))
    ),
    content: Joi.string().regex(/^[^;]{10,140}$/).required().error(
        new Error(JSON.stringify({ field: 'content', msg: messages.content }))
    )
});

module.exports = validationContent;

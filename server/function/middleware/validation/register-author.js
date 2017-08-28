const Joi = require('joi');
const messages = require('./validator-messages');

var registerAuthor = Joi.object().keys({
    name: Joi.string().regex(/^[^;]{2,30}$/).required().error(
        new Error(JSON.stringify({ field: 'name', msg: messages.name }))
    ),
    lastname: Joi.string().regex(/^[^;]{2,30}$/).required().error(
        new Error(JSON.stringify({ field: 'lastname', msg: messages.lastname }))
    ),
    nickname: Joi.string().regex(/^[^;]{2,30}$/).required().error(
        new Error(JSON.stringify({ field: 'nickname', msg: messages.nickname }))
    ),
    email: Joi.string().regex(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/).required().error(
        new Error(JSON.stringify({ field: 'email', msg: messages.email }))
    ),
    password: Joi.string().regex(/^.{8,100}$/).required().error(
        new Error(JSON.stringify({ field: 'password', msg: messages.password }))
    )
});

module.exports = registerAuthor;

const Joi = require('joi');
const messages = require('./validator-messages');

var registerAuthor = Joi.object().keys({
    name: Joi.string().regex(/^[^;]{3,30}$/).required().error(
        new Error(JSON.stringify({ field: 'name', msg: messages.name }))
    ),
    lastname: Joi.string().regex(/^[^;]{3,30}$/).required().error(
        new Error(JSON.stringify({ field: 'lastname', msg: messages.lastname }))
    ),
    nickname: Joi.string().regex(/^[^;]{3,30}$/).required().error(
        new Error(JSON.stringify({ field: 'nickname', msg: messages.nickname }))
    ),
    phone: Joi.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).required().error(
        new Error(JSON.stringify({ field: 'phone', msg: messages.phone }))
    ),
    country: Joi.string().regex(/^[^;]+$/).required().error(
        new Error(JSON.stringify({ field: 'country', msg: messages.country }))
    ),
    email: Joi.string().regex(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/).required().error(
        new Error(JSON.stringify({ field: 'email', msg: messages.email }))
    ),
    password: Joi.string().regex(/^.{7,100}$/).required().error(
        new Error(JSON.stringify({ field: 'password', msg: messages.password }))
    )
});

module.exports = registerAuthor;

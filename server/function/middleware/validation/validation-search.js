const Joi = require('joi');
const messages = require('./validator-messages');

var validationSearch = Joi.object().keys({
    search: Joi.string().regex(/^[^;]{3,30}$/).required().error(
        new Error(JSON.stringify({ field: 'search', msg: messages.title }))
    ),
    paremType: Joi.string().alphanum().min(3).max(30).error(
        new Error(JSON.stringify({ field: 'paramType', msg: messages.string }))
    )
});

module.exports = validationSearch;

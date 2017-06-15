var config = require('./development');

var knex = require('knex')({
    client: 'mysql',
    connection: config.mysql
});

module.exports = knex;

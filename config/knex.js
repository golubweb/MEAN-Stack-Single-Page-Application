var config = require('config');

var knex = require('knex')({
    client: 'mysql',
    connection: config.get('mysql')
});

module.exports = knex;

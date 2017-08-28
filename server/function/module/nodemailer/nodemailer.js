var nodemailer = require('nodemailer');
var config     = require('../../../../config/development');

module.exports = nodemailer.createTransport(config.nodemailer);

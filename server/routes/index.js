"use strict";

const app = require('../../app'),
      path = require("path");

const router = require('express').Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../../client/index.html'));
});

module.exports = router;

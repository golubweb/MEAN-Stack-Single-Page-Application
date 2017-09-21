"use strict";

const app = require('../../app');

const express  = require('express'),
      router   = express.Router();

const generateToken  = require('../function/middleware/generate-token');
const checkUserToken = require('../function/middleware/authenticated');

const Country = require('../function/module/general/country');
const countryData = new Country();

router.get('/data/country', (req, res) => {
    countryData.getList().then(response => {
        res.json(response);
        res.end();
    })
})

module.exports = router;

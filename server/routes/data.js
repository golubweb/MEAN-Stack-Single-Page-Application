"use strict";

const app = require('../app'),
      router  = require('express').Router();

const generateToken  = require('../function/middleware/generate-token'),
      checkUserToken = require('../function/middleware/authenticated');

const Country = require('../function/module/general/country'),
      countryData = new Country();

router.get('/data/country', (req, res) => {
    countryData.getList().then(response => {
        res.json(response);
        res.end();
    })
})

module.exports = router;

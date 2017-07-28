"use strict";

var app = require('../../app');

var express = require('express');
var router = express.Router();

var checkUserToken = require('../function/middleware/authenticated');

const Menius = require('../function/db/menius');
const menuDB = new Menius();

router.get('/main/menius', (req, res) => {
    menuDB.getMainMenu().then((response)=> {
        let menu = response[0],
            subMenu = response[1];

        res.json({ menius: menu, subMenius: subMenu });
        res.end();
    });
});

module.exports = router;

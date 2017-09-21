"use strict";

const app = require('../../app'),
      router = require('express').Router();

const checkUserToken = require('../function/middleware/authenticated');

const Menius = require('../function/mongoDB/menius'),
      menuDB = new Menius();

router.get('/main/menius', (req, res) => {
    menuDB.getMainMenu().then((response)=> {
        let menu = response[0],
            subMenu = response[1],
            thirdmenu = response[2];

        res.json({ menius: menu, subMenius: subMenu, thirdMenius: thirdmenu });
        res.end();
    });
});

module.exports = router;

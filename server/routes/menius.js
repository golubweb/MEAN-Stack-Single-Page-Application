"use strict";

const app = require('../app'),
      router = require('express').Router();

const checkUserToken = require('../function/middleware/authenticated');

const Menius = require('../function/mongoDB/menius'),
      menuDB = new Menius();

router.get('/main/menius', (req, res) => {
    menuDB.getMainMenu().then((response)=> {
         res.json({
            success: true,
            menius: {
                firstMenius: response[0],
                secondMenius: response[1],
                thirdMenius: response[2]
            }
        });
        res.end();
    });
});

module.exports = router;

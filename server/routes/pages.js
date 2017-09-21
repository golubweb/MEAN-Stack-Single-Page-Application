"use strict";

const app = require('../../app'),
      router = require('express').Router();

const checkUserToken = require('../function/middleware/authenticated');

const pages = require('../function/mongoDB/pages'),
      pagesDB = new pages();

router.get('/page/:id', (req, res)=> {
    let pageID = req.params.id;

    pagesDB.getPage(pageID).then((response)=> {
        res.json({ success: true, data: response });
        res.end();
    });
});

module.exports = router;

var app = require('../../app');

var express = require('express');
var router = express.Router();

var checkUserToken = require('../function/middleware/authenticated');

const pages = require('../function/db/pages');
const pagesDB = new pages();

router.get('/page/:id', (req, res)=> {
    let pageID = req.params.id;

    pagesDB.getPage(pageID).then((response)=> {
        res.json({ data: response });
        res.end();
    });
});

module.exports = router;

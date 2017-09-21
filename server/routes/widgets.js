"use strict";

const app = require('../../app');

const router  = require('express').Router();

const Widgets = require('../function/mongoDB/widgets');
const widgetsDB = new Widgets();

router.get('/data/widgets', (req, res) => {
    let big    = widgetsDB.getBannerBig(),
        medium = widgetsDB.getBannerMedium(),
        html   = widgetsDB.getCustomHtml(),
        menu   = widgetsDB.getCustomMenu(),
        social = widgetsDB.getSocialMedia();

    Promise.all([ big, medium, html, menu, social ]).then(data => {
        res.json({ success: true, widgets: { bigBanner: data[0], mediumBanner: data[1], customHtml: data[2], customMenu: data[3], socialMedia: data[4] } });
        res.end();
    });
});

module.exports = router;

"use strict";

const app = require('../app'),
      router  = require('express').Router();

const Joi = require('joi'),
      validationContactUs   = require('../function/middleware/validation/validation-contact'),
      validationNewsletters = require('../function/middleware/validation/validation-newsletters'),
      validationSearch      = require('../function/middleware/validation/validation-search');

const Widgets = require('../function/mongoDB/widgets'),
      widgetsDB = new Widgets();

router.get('/data/widgets', (req, res) => {
    let recent   = widgetsDB.getRecentPosts(),
        catTags  = widgetsDB.getCategoryTags(),
        postTags = widgetsDB.getPostTags(),
        big      = widgetsDB.getBannerBig(),
        medium   = widgetsDB.getBannerMedium(),
        html     = widgetsDB.getCustomHtml(),
        menu     = widgetsDB.getCustomMenu(),
        social   = widgetsDB.getSocialMedia();

    Promise.all([ recent, catTags, postTags, big, medium, html, menu, social ]).then(data => {
        res.json({
            success: true,
            widgets: {
                recentPosts:  data[0],
                categoryTags: data[1],
                postTags:     data[2],
                bigBanner:    data[3],
                mediumBanner: data[4],
                customHtml:   data[5],
                customMenu:   data[6],
                socialMedia:  data[7]
            }
        });

        res.end();
    });
});

router.post('/data/widgets/search', (req, res) => {
    Joi.validate(req.body, validationSearch, (err, validator) => {
        if(!err)
            widgetsDB.getSearchData(req.body).then(response => {
                let responseType = response[0];

                if(Object.keys(response[1]).length > 0)
                    res.json({ success: true, data: response[1], type: responseType });
                else
                    res.json({ success: false, error: 'No data for this search!' });
            });
        else
            res.json({ success: false, error: err.toString().slice(7, err.length) });
    });
});

router.post('/data/widgets/contact', (req, res) => {
    Joi.validate(req.body, validationContactUs, (err, validator) => {
        if(!err)
            widgetsDB.setContactUs(req.body).then((response) => {
                res.json(response);
                res.end();
            });
        else
            res.json({ success: false, error: err.toString().slice(7, err.length) });
    });
});

router.post('/data/widgets/newsletters', (req, res) => {
    Joi.validate(req.body, validationNewsletters, (err, validator) => {
        if(!err)
            widgetsDB.setNewsletters(req.body.email).then(response => {
                res.json(response);
                res.end;
            });
        else
            res.json({ success: false, error: err.toString().slice(7, err.length) });
    });
})

module.exports = router;

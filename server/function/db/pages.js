"use strict";

const knex = require('../../../config/knex');

class pagesDB {
    constructor() {}

    getPage(pageID) {
        return new Promise((resolve, reject)=> {
            knex.select('*')
                .from('pages')
                .where('page_id', pageID)
                .then((data)=> {
                    resolve(data[0]);
            });
        });
    }
}

module.exports = pagesDB;

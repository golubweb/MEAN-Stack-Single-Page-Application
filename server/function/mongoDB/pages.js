"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Pages {
    constructor() {
        this.mc = mongoose.connection.db;
    }

    getPage(id) {
        return new Promise((resolve, reject)=> {
            let pageID = mongoose.Types.ObjectId(id);

            this.mc.collection('pages', (err, collection) => {
                collection.find({'_id': pageID}).toArray((err, results) => {
                    console.log(results);

                    resolve(results);
                });
            });
        });
    }
}

module.exports = Pages;

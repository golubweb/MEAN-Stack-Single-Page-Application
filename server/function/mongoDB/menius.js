"use strict";

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

class Menius {
    constructor() {
        this.mc = mongoose.connection.db;
    }

    getMainMenu() {
        return new Promise((resolve, reject) => {
            this.mc.collection('first_menu', (err, collection) => {

                collection.find().toArray((err, menu) => {

                    this.mc.collection('second_menu', (err, collection) => {
                        collection.find().toArray((err, submenu) => {
                            resolve([menu, submenu]);
                        });
                    });
                });
            });
        })
        .catch((reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
    }
}

module.exports = Menius;

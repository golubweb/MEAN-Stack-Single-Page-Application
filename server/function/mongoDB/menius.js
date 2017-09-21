"use strict";

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

class Menius {
    constructor() {
        this.mc = mongoose.connection.db;
    }

    getMainMenu() {
        return new Promise((resolve, reject) => {
            this.mc.collection('menu_first', (err, first) => {
                first.find().toArray((err, menu) => {

                    this.mc.collection('menu_second', (err, second) => {
                        second.find().toArray((err, submenu) => {

                            this.mc.collection('menu_third', (err, third) => {
                                third.find().toArray((err, thirdmenu) => {
                                    resolve([menu, submenu, thirdmenu]);
                                });
                            });

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

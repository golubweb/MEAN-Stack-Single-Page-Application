"use strict";

const knex = require('../../../config/knex');

class MeniusDB {
    construct() {}

    getMainMenu() {
        let menius = [],
            subMenius = [];

        return new Promise((resolve, reject) => {
            knex.select('*')
                .from('menu')
                .where('menu_stats', '1')
                .then((menu) => {
                    menu.forEach(item => {
                        menius.push({
                            id:      item.menu_id,
                            title:   item.menu_title,
                            url:     item.menu_url,
                            sub_url: item.menu_sub_url,
                            tpl:     item.menu_tpl,
                            sub:     item.menu_sub
                        });
                    });

                    knex.select('*')
                        .from('sub_menu')
                        .where('sub_stats', '1')
                        .then(sub => {
                            Object.keys(sub).map(item => {
                                subMenius.push({
                                    id: sub[item].sub_id,
                                    title: sub[item].sub_title,
                                    url: sub[item].sub_url,
                                    tpl: sub[item].sub_tpl,
                                    parent: sub[item].sub_parent
                                });
                            })

                            resolve([menius, subMenius]);
                    });
            });
        })
        .catch((reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
    }
}

module.exports = MeniusDB;

"use strict";

const countries = require('country-data').countries;

class Country {
    constructor() {}

    getList() {
        return new Promise((resolve, reject) => {
            let item, countryObj = [];

            for(item in countries) {
                let keyCode = countries[item]['alpha3'],
                    name    = countries[item]['name'],
                    status  = countries[item]['status'],
                    codes   = countries[item]['countryCallingCodes'];

                if(item.length > 2 && keyCode && status !== 'deleted')
                    countryObj.push({ name: name, label: keyCode, callCodes: codes });
            }

            resolve(countryObj);
        });
    }
}

module.exports = Country;

"use strict";

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt');
const rand     = require("random-key");

class User {
	constructor() {
        this.newUser = {};
        this.mc = mongoose.connection.db;

        this.userSchema = new Schema({
            name:     { type: String, required: true },
            nickname: { type: String, required: true },
            email:    { type: String, required: true },
            password: { type: String, required: true },
            hash:     { type: String, required: true },
            stats:    { type: Number, required: true }
        });

        this.modelUser = mongoose.model('Users', this.userSchema);
    }

    getUserData(email, pass) {
        return new Promise((resolve, reject) => {
            this.modelUser.collection.findOne({'email': email}, (err, results) => {
                bcrypt.compare(pass, results.password, (err, res) => {
                    if(res === true) {
                        resolve(results);
                    } else {
                        reject();
                    }
                });
            });
        })
        .catch((reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
    }

    addUser(user) {
        return new Promise((resolve, reject) => {
            this.newUser = {
                name:     user.name,
                lastname: user.lastname,
                nickname: user.nickname,
                email:    user.email,
                password: user.password,
                created:  new Date(),
                hash:     rand.generate(30),
                stats: 0
            };

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(this.newUser.password, salt, (err, hash) => {
                    this.newUser.password = hash;

                    this.modelUser.collection.insert(this.newUser, (err, result) => {
                        resolve({success: true, msg: 'Successfully saved user!'});
                    });
                });
            });
        });
    }
}

module.exports = User;

"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Blog {
	constructor() {
        this.mc = mongoose.connection.db;
    }

    getCategory(id) {
        return new Promise((resolve, reject) => {
            let catID = mongoose.Types.ObjectId(id);

            this.mc.collection('blog_posts', (err, collection) => {
                collection.find({'blog_category_id': catID}).toArray((err, results) => {
                    resolve(results);
                });
            });
        });
    }

    getAllCategory() {
        return new Promise((resolve, reject) => {
            this.mc.collection('blog_category', (err, collection) => {
                collection.find({}).toArray((err, results) => {
                    resolve(results);
                });
            });
        });
    }

    getPost(id) {
        return new Promise((resolve, reject) => {
            let postID = mongoose.Types.ObjectId(id);

            this.mc.collection('blog_posts', (err, collection) => {
                collection.findOne({'_id': postID}, (err, results) => {
                    if(err) console.log(err);

                    resolve(results);
                });
            });
        });
    }
}

module.exports = Blog;

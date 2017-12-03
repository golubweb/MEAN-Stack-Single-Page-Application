"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Blog {
	constructor() {
        this.mc = mongoose.connection.db;

        /*this.postSchema = new Schema({
            title            : { type: String, required: true },
            summary          : { type: String, required: true },
            content          : { type: String, required: true },
            blog_category_id : { type: Number, required: true },
            blog_category    : { type: String, required: true },
            tags             : { type: String, required: true },
            tags_id          : { type: String, required: true },
            author           : { type: String, required: true },
            comment          : { type: Number, required: true },
            comment_sum      : { type: Number, required: true },
            thumb            : { type: String, required: true },
            thumb_stats      : { type: Number, required: true },
            created          : { type: Date,   required: true },
            stats            : { type: Number, required: true }
        });

        this.ModelPost = mongoose.model('blog_posts', this.postSchema);*/
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

            this.mc.collection.findOne({'_id': postID}, (err, results)=> {
                if(err) console.log(err);

                resolve(results);
            });
        });
    }
}

module.exports = Blog;

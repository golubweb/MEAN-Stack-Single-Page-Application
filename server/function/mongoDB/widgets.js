"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Widgets {
	constructor() {
        this.mc = mongoose.connection.db;
    }

    getRecentPosts() {
        return new Promise((resolve, reject) => {
            this.mc.collection('blog_posts', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .limit(5)
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }

    getCategoryTags() {
        return new Promise((resolve, reject) => {
            this.mc.collection('blog_category_tags', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .limit(10)
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }

    getPostTags() {
        return new Promise((resolve, reject) => {
            this.mc.collection('blog_post_tags', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .limit(10)
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }

    getBannerBig() {
        return new Promise((resolve, reject) => {
            this.mc.collection('widget_banner_big', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .limit(2)
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }

    getBannerMedium() {
        return new Promise((resolve, reject) => {
            this.mc.collection('widget_banner_medium', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .limit(6)
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }

    getCustomHtml() {
        return new Promise((resolve, reject) => {
            this.mc.collection('widget_custom_html', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .limit(1)
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }

    getCustomMenu() {
        return new Promise((resolve, reject) => {
            this.mc.collection('widget_custom_menu', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }

    getSocialMedia() {
        return new Promise((resolve, reject) => {
            this.mc.collection('widget_social_media', (err, collection) => {
                collection.find({ 'stats': 1 })
                    .toArray((err, results) => {
                        resolve(results);
                });
            });
        });
    }
}

module.exports = Widgets;

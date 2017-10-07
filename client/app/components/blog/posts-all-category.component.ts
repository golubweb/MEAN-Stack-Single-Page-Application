import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import BlogService  from './services/blog.service';

@Component({
    selector:    '[app-posts-all-category]',
    templateUrl: 'templates/blog/posts-all-category.component.html'
})
export default class PostsAllCategoryComponent implements OnInit {
    widgets:  any[] = [];
    categoryList: any[] = [];

    constructor(
        private _blogService: BlogService,
        private _route: ActivatedRoute
    ) {
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }

    ngOnInit() {
        this._blogService.getAllCategory().subscribe(response => {
            this.categoryList = response;
        });
    }
}

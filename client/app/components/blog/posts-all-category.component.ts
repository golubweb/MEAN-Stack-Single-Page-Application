import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import BlogService  from './services/blog.service';

@Component({
    selector:    'posts-all-category',
    templateUrl: 'templates/blog/posts-all-category.component.html'
})
export default class PostsAllCategoryComponent implements OnInit {
    categoryList: any[] = [];

    constructor(
        private router: Router,
        private blogService: BlogService
    ) {
        this.categoryList = this.blogService.allCategoryList;
    }

    ngOnInit() {
        this.blogService.allCategoryFeed.subscribe(newCategory => {
            this.categoryList.push(newCategory);
        });
    }
}

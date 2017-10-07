import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Post         from './interfaces/post.interface';
import BlogService  from './services/blog.service';

@Component({
    selector:    '[app-posts-category]',
    templateUrl: 'templates/blog/posts-category.component.html'
})
export default class PostsCategoryComponent implements OnInit {
    widgets:  any[] = [];
    postList: Post[] = [];

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _blogService: BlogService
    ) {
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }

    ngOnInit() {
        let catID = this._route.snapshot.params['id'];

        this._blogService.getSingleCategory(catID).subscribe(response => {
            this.postList = response;
        });
    }

    getPost(post_id: number): void {
        this._router.navigate(['/blog/category/posts/' + post_id]);
    }
}

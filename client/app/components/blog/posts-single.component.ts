import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import Post                 from './interfaces/post.interface';
import BlogService from './services/blog.service';

@Component({
    selector:    '[app-post-single]',
    templateUrl: 'templates/blog/posts-single.component.html'
})
export default class PostSingleComponent implements OnInit {
    widgets:  any[] = [];
    single: Post[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _blogService: BlogService
    ) {
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            let postID = params['id'];

            this._blogService.getPost(postID).subscribe(response => {
                this.single = response;
            });
        });
    }
}

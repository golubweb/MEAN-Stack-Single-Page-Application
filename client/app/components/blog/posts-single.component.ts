import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Post                 from './interfaces/post.interface';
import BlogService from './services/blog.service';

@Component({
    selector:    'post-single',
    templateUrl: 'templates/blog/posts-single.component.html'
})
export default class PostSingleComponent implements OnInit {
    singlePost: Post[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let postID = params['id'];

            this.blogService.getPost(postID).subscribe(response => {
                this.singlePost = response;
            });
        });
    }
}
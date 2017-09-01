import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Post         from './interfaces/post.interface';
import BlogService  from './services/blog.service';

@Component({
    selector:    '[app-posts-category]',
    templateUrl: 'templates/blog/posts-category.component.html'
})
export default class PostsCategoryComponent implements OnInit {
    postList: Post[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private blogService: BlogService
    ) {}

    ngOnInit() {
        let catID = this.route.snapshot.params['id'];

        this.blogService.getSingleCategory(catID).subscribe(response => {
            this.postList = response;
        });
    }

    getPost(post_id: number): void {
        this.router.navigate(['/blog/category/posts/' + post_id]);
    }
}

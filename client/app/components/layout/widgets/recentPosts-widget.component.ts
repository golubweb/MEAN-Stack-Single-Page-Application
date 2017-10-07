import { Component, OnInit, Input } from '@angular/core';

import Post from '../../blog/interfaces/posts.interface';

@Component({
    selector:    '[app-recent-posts-widget]',
    templateUrl: '/templates/widgets/recent-posts-widget.component.html'
})
export default class RecentPostsWidgetComponent implements OnInit {
    @Input('posts') PostsData: any;

    recent: Post = [];

    ngOnInit() {
        this.fetchRecentPost();
    }

    private fetchRecentPost(): void {
        this.recent = this.PostsData;
    }
}

import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import Post from '../../blog/interfaces/posts.interface';

@Component({
    selector:    '[app-recent-posts-widget]',
    templateUrl: '/templates/widgets/recent-posts-widget.component.html'
})
export default class RecentPostsWidgetComponent implements OnInit {
    recent: Post = [];

    constructor(private _store: Store) {}

    ngOnInit() {
        this.fetchRecentPost();
    }

    private fetchRecentPost(): void {
        this._store.select('widgets').subscribe(respose => {
            console.log(respose.data);
            this.recent = respose.data.recentPosts;
        });
    }
}

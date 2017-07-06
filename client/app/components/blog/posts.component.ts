import { Component } from '@angular/core';

import {
    TaskService,
    SettingsService,
    Task
} from '../../shared/shared';

@Component({
    selector: '#posts-wrap',
    templateUrl: '/templates/posts.component.html'
})
class PostsComponent implements OnInit {
    pageTitle: string;

    constructor() {
        this.pageTitle = 'POST PAGE';
    }
};

export default PostsComponent;

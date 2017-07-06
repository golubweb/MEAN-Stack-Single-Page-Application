import { Component } from '@angular/core';

import {
    TaskService,
    SettingsService,
    Task
} from '../../shared/shared';

@Component({
    selector: 'not-found',
    templateUrl: '/templates/page-not-found.component.html'
})
class PageNotFoundComponent implements OnInit {
    pageTitle: string;

    constructor() {
        this.pageTitle = 'Page Not Found!! 404';
    }
};

export default PageNotFoundComponent;

import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    templateUrl: '/templates/page-not-found.component.html'
})
export default class PageNotFoundComponent {
    title: string;

    constructor() {
        this.title = 'Page Not Found!! 404';
    }
}

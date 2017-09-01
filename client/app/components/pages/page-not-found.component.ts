import { Component } from '@angular/core';

@Component({
    selector:    '[app-not-found]',
    templateUrl: 'templates/pages/page-not-found.component.html'
})
export default class PageNotFoundComponent {
    title: string;

    constructor() {
        this.title = 'Page Not Found!! 404';
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
    selector:    '[app-not-found]',
    templateUrl: 'templates/pages/page-not-found.component.html'
})
export default class PageNotFoundComponent {
    title: string;
    widgets:  any[] = [];

    constructor(private _route: ActivatedRoute) {
        this.title = 'Page Not Found!! 404';
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }
}

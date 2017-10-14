import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:    '[app-pages-root]',
    templateUrl: 'templates/pages/pages.component.html'
})
export default class PagesComponent {
    widgets:  any[] = [];

    constructor(private _route: ActivatedRoute) {
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }
}

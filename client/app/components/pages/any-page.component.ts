import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import PageService from './services/pages.service';
import Page        from './interfaces/';

@Component({
    selector:    '[app-any-page]',
    templateUrl: 'templates/pages/any.component.html'
})
export default class PagesComponent implements OnInit {
    single: Page[] = [];
    widgets:  any[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _pageService: PageService
    ) {
        this._route.data.subscribe(data => this.widgets = data['widgets']);
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            let pageID = params['id'];

            this._pageService.getPage(pageID).subscribe((response)=> {
                this.single = response[0];
            });
        });
    }
}

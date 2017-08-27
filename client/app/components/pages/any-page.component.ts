import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import PageService from './services/pages.service';
import Page        from './interfaces/';

@Component({
    selector:    'any-page',
    templateUrl: 'templates/pages/any.component.html'
})
export default class PagesComponent implements OnInit {
    single: Page[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private pageService: PageService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let pageID = params['id'];

            this.pageService.getPage(pageID).subscribe((response)=> {
                this.single = response[0];
            });
        });
    }
}

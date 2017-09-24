import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import Html from './interfaces/social-media.interface';

@Component({
    selector:    '[app-custom-html-widget]',
    templateUrl: '/templates/widgets/custom-html-widget.component.html'
})
export default class CustomHtmlWidgetComponent implements OnInit {
    content: Html = [];

    constructor(private _store: Store) {}

    ngOnInit() {
        this.fetchCustomHtml();
    }

    private fetchCustomHtml(): any {
        this._store.select('widgets').subscribe(respose => {
            this.content = respose.customHtml[0];
        });
    }
}

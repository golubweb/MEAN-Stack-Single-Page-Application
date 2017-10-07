import { Component, OnInit, Input } from '@angular/core';

import Html from './interfaces/social-media.interface';

@Component({
    selector:    '[app-custom-html-widget]',
    templateUrl: '/templates/widgets/custom-html-widget.component.html'
})
export default class CustomHtmlWidgetComponent implements OnInit {
    @Input('html') HtmlData: any;

    content: Html = [];

    ngOnInit() {
        this.fetchCustomHtml();
    }

    private fetchCustomHtml(): any {
        this.content = this.HtmlData;
    }
}

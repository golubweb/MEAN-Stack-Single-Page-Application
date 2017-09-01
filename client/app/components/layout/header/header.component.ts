import { Component, EventEmitter, Output, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import MeniusComponent from '../menius/menius.component';

@Component({
    selector: '[app-main-header]',
    directives: [ MeniusComponent ],
    templateUrl: 'templates/common/header.component.html'
})
export default class HeaderComponent {
    visible: boolean = true;
    @Output() open:  EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();

    constructor() {}

    collapseMenu() {
        this.visible = !this.visible;

        if (this.visible) {
            this.open.emit(null);
        } else {
            this.close.emit(null);
        }
    }
}

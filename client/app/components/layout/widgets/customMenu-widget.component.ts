import { Component, OnInit, Input } from '@angular/core';

import Menu from './interfaces/banner.interface';

@Component({
    selector:    '[app-custom-menu-widget]',
    templateUrl: '/templates/widgets/custom-menu-widget.component.html'
})
export default class CustomMenuWidgetComponent implements OnInit {
    @Input('menius') meniusData: any;

    menu: Menu = [];

    ngOnInit() {
        this.fetchMenu();
    }

    private fetchMenu(): any {
        this.menu = this.meniusData;
    }
}

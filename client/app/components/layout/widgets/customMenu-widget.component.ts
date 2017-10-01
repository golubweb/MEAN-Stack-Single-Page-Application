import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import Menu from './interfaces/banner.interface';

@Component({
    selector:    '[app-custom-menu-widget]',
    templateUrl: '/templates/widgets/custom-menu-widget.component.html'
})
export default class CustomMenuWidgetComponent implements OnInit {
    menu: Menu = [];

    constructor(private _store: Store) {}

    ngOnInit() {
        this.fetchMenu();
    }

    private fetchMenu(): any {
        this._store.select('widgets').subscribe(respose => {
            this.menu = respose.data.customMenu;
        });
    }
}

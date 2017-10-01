import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import Big from './interfaces/banner.interface';

@Component({
    selector:    '[app-big-banner-widget]',
    templateUrl: '/templates/widgets/big-banner-widget.component.html'
})
export default class BigBannerWidgetComponent implements OnInit {
    banners: Big = [];

    constructor(private _store: Store) {}

    ngOnInit() {
        this.fetchMediumImg();
    }

    private fetchMediumImg(): void {
        this._store.select('widgets').subscribe(respose => {
            this.banners = respose.data.bigBanner;
        });
    }
}

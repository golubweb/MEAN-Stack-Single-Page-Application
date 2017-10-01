import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import Medium from './interfaces/banner.interface';

@Component({
    selector:    '[app-medium-banner-widget]',
    templateUrl: '/templates/widgets/medium-banner-widget.component.html'
})
export default class MediumBannerWidgetComponent implements OnInit {
    banners: Medium = [];

    constructor(private _store: Store) {}

    ngOnInit() {
        this.fetchMediumImg();
    }

    private fetchMediumImg(): void {
        this._store.select('widgets').subscribe(respose => {
            this.banners = respose.data.mediumBanner;
        });
    }
}

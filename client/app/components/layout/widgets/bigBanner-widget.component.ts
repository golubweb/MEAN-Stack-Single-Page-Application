import { Component, OnInit, Input } from '@angular/core';

import Big from './interfaces/banner.interface';

@Component({
    selector:    '[app-big-banner-widget]',
    templateUrl: '/templates/widgets/big-banner-widget.component.html'
})
export default class BigBannerWidgetComponent implements OnInit {
    @Input('banner') BannerData: any;

    banners: Big = [];

    ngOnInit() {
        this.fetchMediumImg();
    }

    private fetchMediumImg(): void {
        this.banners = this.BannerData;
    }
}

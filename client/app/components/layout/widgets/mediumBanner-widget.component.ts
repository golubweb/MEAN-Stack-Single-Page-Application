import { Component, OnInit, Input } from '@angular/core';

import Medium from './interfaces/banner.interface';

@Component({
    selector:    '[app-medium-banner-widget]',
    templateUrl: '/templates/widgets/medium-banner-widget.component.html'
})
export default class MediumBannerWidgetComponent implements OnInit {
    @Input('banner') BannerData: any;

    banners: Medium = [];

    ngOnInit() {
        this.fetchMediumImg();
    }

    private fetchMediumImg(): void {
        this.banners = this.BannerData;
    }
}

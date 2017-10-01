import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import Media from './interfaces/social-media.interface';

@Component({
    selector:    '[app-social-Media-widget]',
    templateUrl: '/templates/widgets/social-media-widget.component.html'
})
export default class SocialMediaWidgetComponent implements OnInit {
    media: Media = [];

    constructor(private _store: Store) {}

    ngOnInit() {
        this.fetchSocialMedia();
    }

    private fetchSocialMedia(): any {
        this._store.select(state => state.widgets).subscribe(respose => {
            this.media = respose.data.socialMedia;
        });
    }
}

import { Component, OnInit, Input } from '@angular/core';

import Media from './interfaces/social-media.interface';

@Component({
    selector:    '[app-social-Media-widget]',
    templateUrl: '/templates/widgets/social-media-widget.component.html'
})
export default class SocialMediaWidgetComponent implements OnInit {
    @Input('media') MediaData: any;

    media: Media = [];

    ngOnInit() {
        this.fetchSocialMedia();
    }

    private fetchSocialMedia(): any {
        this.media = this.MediaData;
    }
}

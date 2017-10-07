import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector:    '[app-post-tags-widget]',
    templateUrl: '/templates/widgets/post-tags-widget.component.html'
})
export default class PostTagsWidgetComponent implements OnInit {
    @Input('tags') PostTags: any;

    tags: any[] = [];

    ngOnInit() {
        this.tags = this.PostTags;
    }
}

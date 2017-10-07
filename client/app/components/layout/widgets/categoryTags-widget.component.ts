import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector:    '[app-category-tags-widget]',
    templateUrl: '/templates/widgets/category-tags-widget.component.html'
})
export default class CategoryTagsWidgetComponent implements OnInit {
    @Input('tags') CategoryTags: any;

    tags: any[] = [];

    ngOnInit() {
        this.tags = this.CategoryTags;
    }
}

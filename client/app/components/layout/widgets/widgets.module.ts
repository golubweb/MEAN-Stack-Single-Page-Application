import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import SearchComponent       from './search-widget.component';
import BigBannerComponent    from './bigBanner-widget.component';
import MediumBannerComponent from './mediumBanner-widget.component';
import RecentPostsComponent  from './recentPosts-widget.component';
import CustomHtmlComponent   from './customHtml-widget.component';
import CustomMenuComponent   from './customMenu-widget.component';
import NewslettersComponent  from './newsletters-widget.component';
import ContactUsComponent    from './contactUs-widget.component';
import PostTagsComponent     from './postTags-widget.component';
import CategoryComponent     from './categoryTags-widget.component';
import SocialMediaComponent  from './socialMedia-widget.component';

import SharedModule from '../../../shared/shared.module';

const WidgetsList: any[] = [
    SearchComponent,
    BigBannerComponent,
    MediumBannerComponent,
    RecentPostsComponent,
    CustomHtmlComponent,
    CustomMenuComponent,
    NewslettersComponent,
    ContactUsComponent,
    PostTagsComponent,
    CategoryComponent,
    SocialMediaComponent
];

@NgModule({
    imports:      [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        WidgetsList
    ],
    providers:    [],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ WidgetsList ]
})
export default class WidgetsModule { }

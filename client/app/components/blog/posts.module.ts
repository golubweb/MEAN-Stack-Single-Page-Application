import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule, Routes }             from '@angular/router';

import BlogService from './services/blog.service';
import { DateConvertPipe, DateYearPipe, DateMonthPipe } from '../../shared/shared';

import PostsComponent            from './posts.component';
import PostSingleComponent       from './posts-single.component';
import PostsAllCategoryComponent from './posts-all-category.component';
import PostsCategoryComponent    from './posts-category.component';

import WidgetsResolver from '../../shared/resolvers/widgets.resolver';

import LayoutModule from '../layout/layout.module';

const TimerRoutsModule: any[] = [
    {
        path: 'blog',
        component: PostsComponent,
        children: [
            { path: 'post/:id',           component: PostSingleComponent,       resolve: { widgets: WidgetsResolver } },
            { path: 'category',           component: PostsAllCategoryComponent, resolve: { widgets: WidgetsResolver } },
            { path: 'category/posts/:id', component: PostsCategoryComponent,    resolve: { widgets: WidgetsResolver } }
        ]
    }
];

@NgModule({
    imports:      [
        CommonModule,
        LayoutModule,
        RouterModule.forRoot(TimerRoutsModule)
    ],
    declarations: [
        PostsComponent,
        PostsCategoryComponent,
        PostSingleComponent,
        DateConvertPipe,
        DateYearPipe,
        DateMonthPipe,
        PostsAllCategoryComponent
    ],
    providers:    [ BlogService, WidgetsResolver ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ PostsComponent ]
})
export default class PostsModule { }

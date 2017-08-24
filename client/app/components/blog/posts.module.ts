import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule, Routes }             from '@angular/router';

import BlogService from './services/blog.service';
import { DateConvertPipe, DateYearPipe, DateMonthPipe } from '../../shared/shared';

import PostsComponent            from './posts.component';
import PostSingleComponent       from './posts-single.component';
import PostsAllCategoryComponent from './posts-all-category.component';
import PostsCategoryComponent    from './posts-category.component';

import LayoutModule from '../layout/layout.module';

const TimerRoutsModule: any[] = [
    {
        path: 'blog',
        component: PostsComponent,
        children: [
            { path: 'post/:id',           component: PostSingleComponent },
            { path: 'category',           component: PostsAllCategoryComponent },
            { path: 'category/posts/:id', component: PostsCategoryComponent }
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
        DateConvertPipe,
        DateYearPipe,
        DateMonthPipe,
        PostsComponent,
        PostsCategoryComponent,
        PostSingleComponent,
        PostsAllCategoryComponent
    ],
    providers:    [ BlogService ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ PostsComponent ]
})
export default class PostsModule { }

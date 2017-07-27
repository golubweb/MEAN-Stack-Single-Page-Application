import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule, Routes }             from '@angular/router';

import BlogService         from './services/blog.service';
import { DateConvertPipe } from '../../shared/shared';

import PostsComponent            from './posts.component';
import PostSingleComponent       from './posts-single.component';
import PostsAllCategoryComponent from './posts-all-category.component';
import PostsCategoryComponent    from './posts-category.component';

import PageNotFoundComponent    from '../error/page-not-found.component';

const TimerRoutsModule: any[] = [
    {
        path: 'blog',
        component: PostsComponent,
        children: [
            { path: 'post/:id',           component: PostSingleComponent },
            { path: 'category',           component: PostsAllCategoryComponent },
            { path: 'category/posts/:id', component: PostsCategoryComponent },
            { path: '**',                 component: PageNotFoundComponent }
        ]
    }
];

@NgModule({
    imports:      [ CommonModule, RouterModule.forRoot(TimerRoutsModule) ],
    declarations: [
        DateConvertPipe,
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

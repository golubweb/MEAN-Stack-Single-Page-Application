import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import AuthEditor            from './components/authorized/auth-editor.guard';

import HomePageComponent     from './components/pages/home-page.component';

import { PagesModule }       from './components/pages/pages.module';
import { PostsModule }       from './components/blog/posts.module';

const AppRoutesModule: any[] = [
    { path: '',               redirectTo: 'page/home-page', pathMatch: 'full' },
    { path: 'page/home-page', component: HomePageComponent },
    { path: 'page',           loadChildren: '/PagesModule' },
    { path: 'blog',           loadChildren: '/PostsModule' }
];

@NgModule({
    imports:   [
        RouterModule.forRoot(AppRoutesModule, { enableTracing: true, useHash: true })
    ],
    providers: [ AuthEditor ],
    exports:   [ RouterModule ]
})
export default class AppRoutingModule {}
//canActivate: [AuthEditor] outlet: 'sidebar'

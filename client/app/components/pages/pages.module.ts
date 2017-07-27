import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';

import PagesComponent    from './pages.component';
import HomePageComponent from './home-page.component';
import AnyPageComponent  from './any-page.component';

import PagesService   from './services/pages.service';

const PagesRoutesModule: any[] = [
    {
        path: 'page',
        component: PagesComponent,
        children: [
            { path: 'home',  component: HomePageComponent },
            { path: ':id',   component: AnyPageComponent }
        ]
    }
];

@NgModule({
    imports:      [ CommonModule, RouterModule.forRoot(PagesRoutesModule) ],
    declarations: [ PagesComponent, HomePageComponent, AnyPageComponent ],
    providers:    [ PagesService ],
    exports:      [ PagesComponent ]
})
export default class PagesModule { }

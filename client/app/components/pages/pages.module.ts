import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import AuthGuard             from '../../shared/services/auth-guard.service';

import PagesComponent        from './pages.component';
import HomePageComponent     from './home-page.component';
import AnyPageComponent      from './any-page.component';
import LoginComponent        from './login.component';
import RegisterComponent     from './register.component';
import PageNotFoundComponent from './page-not-found.component';

import WidgetsResolver from '../../shared/resolvers/widgets.resolver';

import PagesService from './services/pages.service';
import LayoutModule from '../layout/layout.module';

const PagesRoutesModule: any[] = [
    {
        path: 'page',
        component: PagesComponent,
        children: [
            { path: 'login',     component: LoginComponent, canActivate: [AuthGuard], resolve: { widgets: WidgetsResolver } },
            { path: 'home-page', component: HomePageComponent },
            { path: 'register',  component: RegisterComponent, resolve: { widgets: WidgetsResolver } },
            { path: ':id',       component: AnyPageComponent, resolve: { widgets: WidgetsResolver } },
            { path: '**',        component: PageNotFoundComponent, resolve: { widgets: WidgetsResolver } }
        ],
    }
];

@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        RouterModule.forRoot(PagesRoutesModule)
    ],
    declarations: [
        PagesComponent,
        HomePageComponent,
        AnyPageComponent,
        LoginComponent,
        RegisterComponent,
        PageNotFoundComponent
    ],
    providers:    [ PagesService ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ PagesComponent ]
})
export default class PagesModule { }

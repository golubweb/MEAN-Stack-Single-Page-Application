import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule }                    from '@angular/platform-browser';
//import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes }             from '@angular/router';
import { CookieService }                    from 'ngx-cookie-service';
import { StoreModule }                      from '@ngrx/store';
import { EffectsModule, Actions  }          from '@ngrx/effects';

import AppComponent      from './app.component';
import HomePageComponent from './components/pages/home-page.component';

import WidgetsService    from './components/layout/widgets/services/widgets.service';
import WidgetsReducer    from './components/layout/widgets/reducers/widgets.reducer';
import WidgetsEffects    from './components/layout/widgets/effects/widgets.effects';
import WidgetsActions    from './components/layout/widgets/actions/widgets.action';

import MeniusService     from './components/layout/menius/services/menius.service';
import MeniusReducer     from './components/layout/menius/reducers/menius.reducer';
import MeniusEffects    from './components/layout/menius/effects/menius.effects';
import MeniusActions    from './components/layout/menius/actions/menius.action';

import SharedModule      from './shared/shared.module';
import PagesModule       from './components/pages/pages.module';
import PostsModule       from './components/blog/posts.module';
import ProfileModule     from './components/profile/profile.module';

const AppRoutesModule: any[] = [
    { path: '',               redirectTo:   'page/home-page', pathMatch: 'full' },
    { path: 'page/home-page', component:    HomePageComponent },
    { path: 'page',           loadChildren: '/PagesModule' },
    { path: 'blog',           loadChildren: '/PostsModule' },
    { path: 'profile',        loadChildren: '/ProfileModule' }
];

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        SharedModule,
        PagesModule,
        PostsModule,
        ProfileModule,
        RouterModule.forRoot(AppRoutesModule, { useHash: true }),
        StoreModule.forRoot({
            widgets: WidgetsReducer,
            menius:  MeniusReducer
        }),
        EffectsModule.forRoot([WidgetsEffects, MeniusEffects])
    ],
    declarations: [
        AppComponent
    ],
    providers:    [
        CookieService,
        MeniusService,
        MeniusActions,
        WidgetsService,
        WidgetsActions,
        Actions
    ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ AppComponent ]
})
export default class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';

import AuthGuard        from '../../shared/services/auth-guard.service';

import ProfileComponent       from './profile.component';
import ProfileAuthorComponent from './profile-author.component';
import ProfileEditComponent   from './profile-edit.component';

import ProfileService from './services/profile.service';
import LayoutModule   from '../layout/layout.module';

const PagesRoutesModule: any[] = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            { path: 'author', component: ProfileAuthorComponent },
            { path: 'edit',   component: ProfileEditComponent }
        ]
    }
];

@NgModule({
    imports:      [
        CommonModule,
        LayoutModule,
        RouterModule.forRoot(PagesRoutesModule)
    ],
    declarations: [
        ProfileComponent,
        ProfileAuthorComponent,
        ProfileEditComponent
    ],
    providers:    [ ProfileService ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ ProfileComponent ]
})
export default class ProfileModule { }

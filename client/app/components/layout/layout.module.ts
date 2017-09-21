import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule }                    from '@ngrx/effects';
import { StoreModule }                      from '@ngrx/store';

import { CountryEffects } from './register/effects/country.effects';
import { CountryReducer } from './register/reducers/country.reducer';

import { SHARED_DIRECTIVES } from '../../shared/shared';
import LoginAnimateDirective from './login/directive/login-animate.directive';

import LayoutComponent         from './layout.component';
import HeaderComponent         from './header/header.component';
import SidebarLeftComponent    from './sidebar/sidebar-left.component';
import SidebarRightComponent   from './sidebar/sidebar-right.component';
import FooterComponent         from './footer/footer.component';
import LoginWidgetComponent    from './login/login-widget.component';
import RegisterWidgetComponent from './register/register-widget.component';

import MeniusModule from './menius/menius.module';

const layoutList: any[] = [
    LayoutComponent,
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    FooterComponent,
    LoginWidgetComponent,
    RegisterWidgetComponent
];

@NgModule({
    imports:      [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        EffectsModule.forRoot([CountryEffects]),
        StoreModule.forRoot({ registerCountry: CountryReducer }),
        MeniusModule
    ],
    declarations: [
        layoutList,
        SHARED_DIRECTIVES,
        LoginAnimateDirective
    ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ layoutList ]
})
export default class LayoutModule { }

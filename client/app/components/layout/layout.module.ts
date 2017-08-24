import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';


import LayoutComponent       from './layout.component';
import HeaderComponent       from './header/header.component';
import SidebarLeftComponent  from './sidebar/sidebar-left.component';
import SidebarRightComponent from './sidebar/sidebar-right.component';
import FooterComponent       from './footer/footer.component';
import LoginWidgetComponent  from './login/login-widget.component';

import MeniusModule from './menius/menius.module';

const layoutList: any[] = [
    LayoutComponent,
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    FooterComponent,
    LoginWidgetComponent
];

@NgModule({
    imports:      [
        CommonModule,
        MeniusModule
    ],
    declarations: [
        layoutList
    ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ layoutList ]
})
export default class LayoutModule { }

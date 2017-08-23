import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';

import HeaderComponent from './header/header.component';

import MeniusModule    from './menius/menius.module';

@NgModule({
    imports:      [
        CommonModule,
        MeniusModule
    ],
    declarations: [ HeaderComponent ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    exports:      [ HeaderComponent ]
})
export default class LayoutModule { }

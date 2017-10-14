import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import AuthGuardService       from './services/auth-guard.service';
import AuthenticationService  from './services/authentication.service';
import CountryService         from './services/country.service';

import DateConvertPipe   from './pipes/date-convert.pipe';
import DateYearPipe      from './pipes/date-year.pipe';
import DateMonthPipe     from './pipes/date-month.pipe';
import FormattedTimePipe from './pipes/formatted-time.pipe';

const SHARED_LIST: any[] = [
    DateConvertPipe,
    DateYearPipe,
    DateMonthPipe,
    FormattedTimePipe
];

@NgModule({
    imports:      [
        CommonModule,
        RouterModule
    ],
    declarations: [
        SHARED_LIST
    ],
    providers:    [
        AuthGuardService,
        AuthenticationService,
        CountryService
    ],
    exports:      [ SHARED_LIST ]
})
export default class SharedModule { }

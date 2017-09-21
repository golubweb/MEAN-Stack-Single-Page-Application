import FormattedTimePipe from './pipes/formatted-time.pipe';
import DateConvertPipe   from './pipes/date-convert.pipe';
import DateYearPipe      from './pipes/date-year.pipe';
import DateMonthPipe     from './pipes/date-month.pipe';

import ToggleElementDirective from './directives/toggle-element.directive';

import AuthGuardService       from './services/auth-guard.service';
import AuthenticationService  from './services/authentication.service';
import CountryService         from './services/country.service';

const SHARED_PIPES: any[] = [
    FormattedTimePipe
];

const SHARED_DIRECTIVES: any[] = [
    ToggleElementDirective
];

const SHARED_PROVIDERS: any[] = [
    AuthGuardService,
    AuthenticationService,
    CountryService
];

export {
    FormattedTimePipe,
    DateConvertPipe,
    DateYearPipe,
    DateMonthPipe,
    SHARED_PIPES,

    ToggleElementDirective,
    SHARED_DIRECTIVES,

    AuthGuardService,
    AuthenticationService,
    CountryService,
    SHARED_PROVIDERS
};

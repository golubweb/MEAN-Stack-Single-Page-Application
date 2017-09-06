import FormattedTimePipe from './pipes/formatted-time.pipe';
import DateConvertPipe   from './pipes/date-convert.pipe';
import DateYearPipe      from './pipes/date-year.pipe';
import DateMonthPipe     from './pipes/date-month.pipe';

import AuthGuardService       from './services/auth-guard.service';
import AuthenticationService  from './services/authentication.service';

const SHARED_PIPES: any[] = [
    FormattedTimePipe
];

const SHARED_PROVIDERS: any[] = [
    AuthGuardService,
    AuthenticationService
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
    SHARED_PROVIDERS
};

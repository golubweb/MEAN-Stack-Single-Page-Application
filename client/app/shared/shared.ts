import Task      from './interfaces/task';
import Queueable from './interfaces/queueable';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe    from './pipes/queued-only.pipe';
import DateConvertPipe   from './pipes/date-convert.pipe';
import DateYearPipe      from './pipes/date-year.pipe';
import DateMonthPipe     from './pipes/date-month.pipe';

import AuthenticationService from './services/authentication.service';
import CookieService         from './services/cookie.service';
import SettingsService       from './services/settings.service';
import TaskService           from './services/task.service';

const SHARED_PIPES: any[] = [
    FormattedTimePipe,
    QueuedOnlyPipe
];

const SHARED_PROVIDERS: any[] = [
    AuthenticationService,
    SettingsService,
    TaskService,
    CookieService
];

export {
    Queueable,
    Task,

    FormattedTimePipe,
    QueuedOnlyPipe,
    DateConvertPipe,
    DateYearPipe,
    DateMonthPipe,
    SHARED_PIPES,

    AuthenticationService,
    SettingsService,
    TaskService,
    CookieService,
    SHARED_PROVIDERS
};

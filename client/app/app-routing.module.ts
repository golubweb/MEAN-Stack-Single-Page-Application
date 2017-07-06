import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import TaskComponent       from './components/tasks/tasks.component';
import TaskEditorComponent from './components/tasks/task-editor.component';

import TimerComponent       from './components/timer/timer.component';
import TimerWidgetComponent from './components/timer/timer-widget.component';

const appRoutes: any[] = [
    { path: '', redirectTo: '/task', pathMatch: 'full' },
    { path: 'tasks/editor', component: TaskEditorComponent },
    { path: 'timer',        component: TimerComponent }
    //{ path: 'task',       component: TaskComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true, useHash: true }
        )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

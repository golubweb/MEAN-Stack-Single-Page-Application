import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import AuthEditor            from './components/authorized/auth-editor.guard';

import TaskComponent         from './components/tasks/tasks.component';
import TaskEditorComponent   from './components/tasks/task-editor.component';

import TimerComponent        from './components/timer/timer.component';
import TimerWidgetComponent  from './components/timer/timer-widget.component';
import LoginComponent        from './components/login/login.component';
import PageNotFoundComponent from './components/error/page-not-found.component';

import { TimerModule }       from './components/timer/timer.module';

import { PagesModule }       from './components/pages/pages.module';
import { PostsModule }       from './components/blog/posts.module';

const AppRoutesModule: any[] = [
    { path: '',             redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks',        component: TaskComponent },
    { path: 'tasks/editor', component: TaskEditorComponent },
    { path: 'task-out',     component: TimerWidgetComponent, outlet: 'sidebar' },
    { path: 'login',        component: LoginComponent },
    { path: 'timer',        loadChildren: '/TimerModule' },
    { path: 'page',         loadChildren: '/PagesModule' },
    { path: 'blog',         loadChildren: '/PostsModule' },
    { path: '**',           component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutesModule, { enableTracing: true, useHash: true })
    ],
    exports: [ RouterModule ]
})
export default class AppRoutingModule {}

//canActivate: [AuthEditor]

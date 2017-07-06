import { Component } from '@angular/core';
import {
    ROUTER_DIRECTIVES,
    CanActivate,
    ComponentInstruction,
    OnActivate,
    CanDeactivate,
    OnDeactivate
} from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'pomodoro-tasks-editor',
    templateUrl: '/templates/tasks-editor.component.html'
})
class TaskEditorComponent implements OnActivate, CanDeactivate, OnDeactivate {

    constructor() {

    }
}

export default TaskEditorComponent;

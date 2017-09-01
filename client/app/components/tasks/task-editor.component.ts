import { Component, OnInit } from '@angular/core';
import { CanActivate, CanDeactivate, OnDeactivate, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { Task, TaskService } from '../../shared/shared';

@Component({
    selector: '[app-pomodoro-tasks-editor]',
    templateUrl: 'templates/tasks-editor.component.html',
    styles: [`
        .ng-valid {border-color: #3c763d;}
        .ng-invalid {border-color: #a94442;}
        .ng-untouched {border-color: #999;}
    `]
})
class TaskEditorComponent implements OnInit, CanDeactivate, OnDeactivate {
    task: Task;
    taskLabel: string;
    changesSaved: boolean;

    rForm: FormGroup;

    constructor(
        private title: Title,
        private router: Router,
        private fb: FormBuilder,
        private taskService: TaskService
    ) {
        this.task = <Task>{};

        this.rForm = fb.group({
            'name': [null, Validators.required],
            'deadline': [null, Validators.required],
            'pomodorosRequired': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(4)])],
            'queued': [false, Validators.required]
        });
    }

    ngOnInit(): string {
        this.taskLabel = 'Your task name is ';
        this.title.setTitle('Task Editor');

        this.rForm.get('queued').valueChanges.subscribe((queued)=> {
            console.log(this.rForm.get('name').value);
            console.log(this.rForm.get('deadline').status);
            console.log(this.rForm.get('pomodorosRequired').touched);
            console.log(queued === true);
        });
    }

    ngCanDeactivate() {
        return this.changesSaved || confirm('Are you sure want to leave?');
    }

    routerOnDeactivate() {
        this.title.setTitle('My Angular 4!');
    }

    saveTask(task) {
        this.task.name = task.name;
        this.task.deadline = new Date(task.deadline.toString());
        this.task.pomodorosRequired = task.pomodorosRequired;
        this.task.queued = task.queued;

        this.taskService.addTask(task);

        this.changesSaved = true;

        this.router.navigate(['/tasks']);
    }
}

export default TaskEditorComponent;

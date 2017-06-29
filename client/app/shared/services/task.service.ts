import { Injectable } from '@angular/core';
import { Task } from '../shared';

@Injectable()
export default class TaskService {
    public taskStore: Array<Task> = [];

    constructor() {
        const tasks = [
            {
                name: "Code an HTML Table",
                deadline: "Jun 23 2017",
                pomodorosRequired: 1
              }, {
                name: "Sketch a wireframe for the new homepage",
                deadline: "Jun 24 2018",
                pomodorosRequired: 2
              }, {
                name: "Style table with Bootstrap styles",
                deadline: "Jun 25 2018",
                pomodorosRequired: 1
              }, {
                name: "Reinforce SEO with custom sitemap.xml",
                deadline: "Jun 26 2018",
                pomodorosRequired: 3
              }
        ];

        this.taskStore = tasks.map(item => {
            return {
                name: item.name,
                deadline: new Date(item.deadline),
                queued: false,
                pomodorosRequired: item.pomodorosRequired
            };
        });
    }
}

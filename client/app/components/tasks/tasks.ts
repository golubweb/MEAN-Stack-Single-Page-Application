import TasksComponent       from './tasks.component';
import TaskIconsComponent   from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';
import TaskEditorComponent  from './task-editor.component';

const TASKS_DIRECTIVES: any[] = [
    TasksComponent,
    TaskIconsComponent,
    TaskTooltipDirective,
    TaskEditorComponent
];

export {
    TASKS_DIRECTIVES,
    TasksComponent,
    TaskEditorComponent,
    TaskTooltipDirective
};

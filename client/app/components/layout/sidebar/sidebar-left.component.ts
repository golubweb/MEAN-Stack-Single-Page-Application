import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector:    '[app-main-sidebar-left]',
    templateUrl: 'templates/common/sidebar-left.component.html'
})
export default class SidebarLeftComponent implements OnInit {
    @Input('widgetsData') Widgets: any;
}

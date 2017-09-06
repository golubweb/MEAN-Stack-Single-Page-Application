import { Component, ElementRef, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:    '[app-main-header]',
    templateUrl: 'templates/common/header.component.html'
})
export default class HeaderComponent {
    constructor(private _el: ElementRef) {}
}

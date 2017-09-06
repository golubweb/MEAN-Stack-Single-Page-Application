import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:    '[app-main-header]',
    templateUrl: 'templates/common/header.component.html'
})
export default class HeaderComponent implements AfterViewInit{
    @ViewChild('menuBtn') MenuBtn: ElementRef;

    constructor(private _el: ElementRef) {}

    ngAfterViewInit() {
        //console.log(this.MenuBtn.nativeElement.attributes);
    }
}

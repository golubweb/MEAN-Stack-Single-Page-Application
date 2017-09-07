import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
//import { trigger, state, animate, transition, style }    from '@angular/animations';

@Directive({
    selector: '[app-login-animate]'
})
export default class LoginAnimateDirective {
    constructor(
        private _el: ElementRef,
        private _renderer: Renderer
    ) {}

    @HostListener('click') onMouseClick() {
        this.animateLogin();
    }

    private animateLogin() {
        //let loginPanel = this._el.nativeElement;
        //.querySelector('.login__panel--info');
        //console.log(loginPanel.style);

        /*state('*', style({
            top: '-80px',
            left: '77px',
            right: 'auto'
        }))*/
    }
}

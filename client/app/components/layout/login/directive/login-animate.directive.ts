import { Directive, Renderer, HostListener } from '@angular/core';
import { trigger, state, animate, transition, style }    from '@angular/animations';

@Directive({
    selector: '[app-login-animate]'
})
export default class LoginAnimateDirective {
    openLogin: boolean = false;

    constructor(private _renderer: Renderer) {}

    @HostListener('click') onMouseClick() {
        let loginPanel = document.querySelector('.login__panel--info');

        (!this.openLogin) ? this.animate(loginPanel, '6px', '-200px', true) : this.animate(loginPanel, '6px', '200px', false);
    }

    private animate(element, top, left, open) {
        this._renderer.invokeElementMethod(element, 'animate', [
                [
                    { top : top, left : '0', offset : 0 },
                    { top : top, left : left, offset : 1 }
                ],
                { delay: 0, duration: 500, easing: 'ease', fill: 'both' }
            ]
        );

        this.openLogin = open;
    }
}

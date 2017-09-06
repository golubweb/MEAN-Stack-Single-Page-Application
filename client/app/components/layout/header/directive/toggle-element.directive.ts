import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[app-toggle-element]'
})
export default class ToggleElementDirective {
    //@Input() appToggleElement: any;

    constructor(
        private _el: ElementRef,
        private renderer: Renderer
    ) { }

    @HostListener('click') onMouseClick() {
        let menu = this._el.nativeElement.querySelector('.nav__list');

        if(menu.style.display !== 'none') {
            this.renderer.setElementStyle(menu, 'display', 'none');
        } else {
            this.renderer.setElementStyle(menu, 'display', 'block');
        }
    }
}

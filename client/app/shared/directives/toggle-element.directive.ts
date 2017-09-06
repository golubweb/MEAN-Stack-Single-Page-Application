import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[app-toggle-element]'
})
export default class ToggleElementDirective {
    constructor(
        private _el: ElementRef,
        private renderer: Renderer
    ) { }

    @HostListener('click') onMouseClick() {
        this.toggleMenu();
    }

    private toggleMenu() {
        let menu = this._el.nativeElement.querySelector('.nav__list');

        (menu.style.display !== 'none') ? this.showHideElement(menu, 'none') : this.showHideElement(menu, 'block');
    }

    private showHideElement(element, value) {
        this.renderer.setElementStyle(element, 'display', value);
    }
}

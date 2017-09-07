import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[app-toggle-element]'
})
export default class ToggleElementDirective {
    constructor(
        private _el: ElementRef,
        private _renderer: Renderer
    ) { }

    @HostListener('click') onMouseClick() {
        this.toggleMenu();
    }

    private toggleMenu() {
        let menu = this._el.nativeElement.querySelector('.nav__list');

        (menu.style.display !== 'none') ? this.showHideElement(menu, 'none') : this.showHideElement(menu, 'block');
    }

    private showHideElement(element, value) {
        this._renderer.setElementStyle(element, 'display', value);
    }
}

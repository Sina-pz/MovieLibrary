import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRowItem]'
})
export class RowItemDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // set style on Select
  @Input() set selected(value: boolean) {
    this._selected = value;
    this.setSelectedStyle(this.selected);
  }
  get selected(): boolean {
    return this._selected;
  }
  // tslint:disable-next-line: variable-name
  private _selected: boolean;

     // set style on mouseEnter
  @HostListener('mouseenter') onMouseEnter() {
    // set item hover class
    if (this.el && this.el.nativeElement) {
    this.renderer.addClass(this.el.nativeElement, 'hoverClass');
    }
  }
    // set style on mouseLeave
  @HostListener('mouseleave') onMouseLeave() {
    // remove item hover class
    if (this.el && this.el.nativeElement) {
    this.renderer.removeClass(this.el.nativeElement, 'hoverClass');
    }
  }

  private setSelectedStyle(selected: boolean) {
    if (this.el && this.el.nativeElement) {
    if (selected) {
      this.renderer.addClass(this.el.nativeElement, 'selected');
  } else {
      this.renderer.removeClass(this.el.nativeElement, 'selected');
    }
    }
  }


}

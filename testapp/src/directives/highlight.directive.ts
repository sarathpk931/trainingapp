import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleted]'
})
export class HighlightCompletedDirective {

  @Input() set appHighlightCompleted(completed: boolean) {
    if (completed) {
      debugger;
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}

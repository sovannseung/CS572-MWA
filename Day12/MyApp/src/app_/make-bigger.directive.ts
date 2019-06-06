import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private e: ElementRef, private r: Renderer2) {

  }

  @HostBinding('style.fontSize') fontSize = '18px';

  @HostListener('dblclick') dbclick() {
    this.fontSize = parseInt(this.fontSize) + 2  + 'px';
    this.r.setStyle(this.e.nativeElement, 'font-size', this.fontSize);
  }

}

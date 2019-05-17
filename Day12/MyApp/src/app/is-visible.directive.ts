import { Directive, Input, OnInit, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit  {

  @Input() appIsVisible: boolean;

  constructor(private e: ElementRef, private r: Renderer2) {

  }

  ngOnInit(): void {
    if (this.appIsVisible) {
      this.r.setStyle(this.e.nativeElement, 'visibility', 'visible');
    } else {
      console.log(this.appIsVisible);
      this.r.setStyle(this.e.nativeElement, 'visibility', 'hidden');
    }
  }


}

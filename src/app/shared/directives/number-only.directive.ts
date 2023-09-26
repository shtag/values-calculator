import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange() {
    const inputValue: string = this.el.nativeElement.value;
    const regex = /^[0-9]*[.]?[0-9]+$/;
    if (!regex.test(inputValue)) {
      this.el.nativeElement.value = inputValue.slice(0, -1)
      console.log(inputValue.slice(0, -1))
    }
  }

}

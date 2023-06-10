import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange() {
    const inputValue: string = this.el.nativeElement.value;
    // const regex = /^\d*\.?\d*$/; // this work but 123.....  | 123.1.1.1.1.1
    // const regex = /^\d+(\.\d*)?$/;
    // const regex = /^(?!.*(\..*){2})\d+(\.\d*)?$/;
    const regex = /^[0-9]*[.]?[0-9]+$/;
    if (!regex.test(inputValue)) {
      // this.el.nativeElement.value = inputValue.replace(/[^0-9.]*/g, ''); // this work but 123.....  | 123.1.1.1.1.1
      this.el.nativeElement.value = inputValue.slice(0, -1)
      console.log(inputValue.slice(0, -1))
      // console.log(this.el.nativeElement.value) //TODO: fix 123.....  | 123.1.1.1.1.1
    }
  }

}

import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @HostBinding('disabled') isDisabled = true;
  @HostListener('hover') trigger() {
    this.isDisabled === false;
  }
}

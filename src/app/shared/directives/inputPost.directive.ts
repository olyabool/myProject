import { Directive, HostListener, Input, OnInit } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
  selector: '[formControlName][inputPost]',
})
export class InputPostDirective implements OnInit {
  constructor(private readonly control: NgControl) {}

  @Input('inputPost') options: string

  @HostListener('blur', ['$event'])
  public onBlur(event: any): void {
    this.changeValue(event)
  }

  public changeValue(event: any = null) {
    if (this.options) {
      let value = null
      if (event) {
        value = event.target.value
      } else {
        value = this.control.control.value
      }
      if (value) {
        if (this.options.indexOf('trim') != -1) {
          value = value.trim()
        }
        this.control.control.setValue(value)
      }
    }
  }

  ngOnInit() {}
}

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewcontainer : ViewContainerRef,
    private templateRef : TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number){

    this.viewcontainer.clear();
    for(let i = 0 ; i<times; i++){
      this.viewcontainer.createEmbeddedView(this.templateRef, {});
    }

  }
}

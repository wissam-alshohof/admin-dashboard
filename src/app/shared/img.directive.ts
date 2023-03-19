import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[src]'
})
export class ImgDirective {

  @Input('src') src!:string ;

  srcImageNotFound = "/assets/placeHolder.jpg";
  srcLoading = "/assets/loading.jpg";

  
  @HostListener('error')
  onError() {
    this.eleRef.nativeElement.src = this.srcImageNotFound;
  }

  constructor(private eleRef:ElementRef<HTMLImageElement>) {
   }

}
